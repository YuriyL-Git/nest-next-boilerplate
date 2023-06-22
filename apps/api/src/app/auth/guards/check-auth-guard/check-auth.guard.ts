import { AuthGuard } from "@nestjs/passport";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Reflector } from "@nestjs/core";
import { MessageStrings } from "../../../consts/message-strings";

@Injectable()
export class CheckAuthGuard extends AuthGuard("jwt") implements CanActivate {
  public constructor(private readonly reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    return context_.getContext().req;
  }

  handleRequest(error, user, info, context) {
    const context_ = GqlExecutionContext.create(context);
    const isPublic = this.reflector.get<boolean>("isPublic", context.getHandler());
    const reply = context_.getContext().reply;

    const clearCookies = () => {
      reply.setCookie("token", "", {
        path: "/",
      });
      reply.setCookie("token-expires", "");
    };

    if (!isPublic && (!user || info || error)) {
      clearCookies();
      throw error || new UnauthorizedException();
    }

    if (!isPublic && !user.isVerified) {
      clearCookies();
      throw new UnauthorizedException(MessageStrings.UserNotVerified);
    }

    return user;
  }
}

import { AuthGuard } from "@nestjs/passport";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Reflector } from "@nestjs/core";

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

    if (!isPublic && (!user || info || error)) {
      reply.setCookie("token", "", {
        path: "/",
      });
      reply.setCookie("token-expires", "");
      throw error || new UnauthorizedException();
    }

    return user;
  }
}

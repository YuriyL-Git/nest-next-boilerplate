import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class CheckAuthGuard extends AuthGuard("jwt") {
  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    return context_.getContext().req;
  }

  handleRequest(error, user, info, context) {
    const context_ = GqlExecutionContext.create(context);
    const reply = context_.getContext().reply;

    if (!user || info || error) {
      reply.setCookie("token", "");
      reply.setCookie("token-expires", "");
      throw error || new UnauthorizedException();
    }

    return user;
  }
}

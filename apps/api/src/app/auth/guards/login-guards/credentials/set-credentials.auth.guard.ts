import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { GqlExecutionContext } from "@nestjs/graphql";
import { getHandleRequest } from "../utils";

@Injectable()
export class SetCredentialsAuthGuard extends AuthGuard("local") {
  constructor(private jwtService: JwtService) {
    super();

    this.handleRequest = getHandleRequest(this.jwtService);
  }

  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    const request = context_.getContext();
    request.body = context_.getArgs().loginInput;
    return request;
  }
}

import { CookieSerializeOptions } from "@fastify/cookie";
import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { GqlExecutionContext } from "@nestjs/graphql";
import { environment } from "@libs/shared/environement";

const { jwtExpiresSeconds, cookiesSecure } = environment;

const HTTP_ONLY_COOKIE: CookieSerializeOptions = {
  maxAge: Number(jwtExpiresSeconds),
  httpOnly: true,
  signed: true,
  secure: cookiesSecure,
  path: "/",
};

const USERS_COOKIE: CookieSerializeOptions = {
  maxAge: Number(jwtExpiresSeconds),
};

@Injectable()
export class SetGoogleAuthGuard extends AuthGuard("google") {
  constructor(private jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    const request = context_.getContext();

    request.body = context_.getArgs().googleLoginInput;
    return request;
  }

  handleRequest(error, user, info, context) {
    if (error || !user || info) throw error || new UnauthorizedException();

    const authContext = GqlExecutionContext.create(context);
    const { reply } = authContext.getContext();

    const jwtExpiresMs = Number(jwtExpiresSeconds) * 1000;
    const tokenExpires = Date.now() + jwtExpiresMs;
    const accessToken = this.jwtService.sign({ sub: user.id });

    reply.setCookie("token", accessToken, HTTP_ONLY_COOKIE);
    reply.setCookie("token-expires", tokenExpires.toString(), USERS_COOKIE);

    return user;
  }
}

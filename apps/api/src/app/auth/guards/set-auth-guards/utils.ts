import { IAuthGuard } from "@nestjs/passport/dist/auth.guard";
import { UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { environment } from "@libs/shared/environement";
import { CookieSerializeOptions } from "@fastify/cookie";
import { JwtService } from "@nestjs/jwt";

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

type GetHandleRequest = (jwtService: JwtService) => IAuthGuard["handleRequest"];

export const getHandleRequest: GetHandleRequest = (jwtService: JwtService) => {
  return (error, user, info, context) => {
    if (error || !user || info) throw error || new UnauthorizedException();

    const authContext = GqlExecutionContext.create(context);
    const { reply } = authContext.getContext();

    const jwtExpiresMs = Number(jwtExpiresSeconds) * 1000;
    const tokenExpires = Date.now() + jwtExpiresMs;
    const accessToken = jwtService.sign({ sub: user.id });

    reply.setCookie("token", accessToken, HTTP_ONLY_COOKIE);
    reply.setCookie("token-expires", tokenExpires.toString(), USERS_COOKIE);

    return user;
  };
};

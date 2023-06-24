import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { UserJwtPayload } from "../../dto/types";
import { TokenPayload } from "@app/shared/types";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      jsonWebTokenOptions: { algorithms: ["HS256"] },
    });
  }

  async validate(payload: TokenPayload): Promise<UserJwtPayload> {
    const { isVerified, sub } = payload;
    if (!sub) {
      return false;
    }
    return { id: sub, isVerified };
  }
}

const cookieExtractor = (request: FastifyRequest): string | null => {
  const isCookieTokenExist = !!request?.cookies?.token;
  if (!isCookieTokenExist) {
    console.log("Cookie not passed"); // TODO: log
    return null;
  }

  const unsignedCookieToken = request.unsignCookie(request.cookies.token);
  return unsignedCookieToken?.value || null;
};

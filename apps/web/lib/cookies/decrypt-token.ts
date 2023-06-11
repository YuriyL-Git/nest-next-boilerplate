import { unsign } from "./cookie-signature";
import * as jose from "jose";
import { environment } from "@libs/shared/environement";

const { cookieSecret, jwtSecret } = environment;

interface TokenPayload {
  sub: string;
}

export const DecryptToken = async (token: string) => {
  if (!token) {
    console.log("Cookie token is missing");
  }
  const unsignedToken = await unsign(token, cookieSecret);

  if (!unsignedToken) {
    return false;
  }

  try {
    const { payload } = await jose.jwtVerify(
      unsignedToken as string,
      new TextEncoder().encode(jwtSecret),
    );
    // @ts-ignore
    return payload as TokenPayload;
  } catch {
    return false;
  }
};

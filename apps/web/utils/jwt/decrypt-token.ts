import { unsign } from "./cookie-signature";
import * as jose from "jose";
import { environment } from "@libs/shared/environement";
import { TokenPayload } from "@app/shared/types";
import { MessageStrings } from "../../../api/src/consts/message-strings";

const { cookieSecret, jwtSecret } = environment;

export const DecryptToken = async (token: string) => {
  if (!token) {
    console.error(MessageStrings.CoockieTokenMissing);
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

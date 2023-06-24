import { NextRequest } from "next/server";
import { DecryptToken } from "./decrypt-token";

export async function checkAuth(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const tokenPayload = token && (await DecryptToken(token));
  return tokenPayload && tokenPayload.isVerified;
}

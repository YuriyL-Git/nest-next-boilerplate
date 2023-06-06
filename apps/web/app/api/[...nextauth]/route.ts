import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { webEnv } from "../../../environments/environments";

const prisma = new PrismaClient();

const {
  googleProvider: { clientSecret, clientId }
} = webEnv;

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId,
      clientSecret
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = user.id;
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import { FastifyRequest, FastifyReply } from "fastify";
import { User } from "@libs/api/generated-db-types";

export interface IUserContext {
  reply: FastifyReply;
  request: FastifyRequest;
  user: User;
}

export type UserJwtPayload = false | { id: string; isVerified: boolean };

import { SetMetadata } from "@nestjs/common";

export const PublicGuard = () => SetMetadata("isPublic", true);

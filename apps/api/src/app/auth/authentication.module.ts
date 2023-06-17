import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationResolver } from "./authentication.resolver";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./guards/strategy/local.strategy";
import { JwtStrategy } from "./guards/strategy/jwt.strategy";
import { UserModule } from "../user-feature/user.module";
import { environment } from "@libs/shared/environement";
import { GoogleStrategy } from "./guards/strategy/google.strategy";

const { jwtSecret, jwtExpiresSeconds } = environment;

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: Number(jwtExpiresSeconds) },
    }),
  ],
  providers: [
    AuthenticationResolver,
    AuthenticationService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
  ],
})
export class AuthenticationModule {}

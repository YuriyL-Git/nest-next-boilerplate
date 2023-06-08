import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationResolver } from "./authentication.resolver";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./guards/strategy/local.strategy";
import { JwtStrategy } from "./guards/strategy/jwt.strategy";
import { apiEnv } from "../../environments/environments";
import { UserModule } from "../user-feature/user.module";

const { jwtSecret, jwtExpiresSeconds } = apiEnv;

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: Number(jwtExpiresSeconds) }
    })
  ],
  providers: [AuthenticationResolver, AuthenticationService, LocalStrategy, JwtStrategy]
})
export class AuthenticationModule {}

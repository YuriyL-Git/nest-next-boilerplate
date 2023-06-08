import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationResolver } from "./authentication.resolver";
import { UserModule } from "@next-nest-boilerplate/api/feature-user";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./guards/strategy/local.strategy";
import { JwtStrategy } from "./guards/strategy/jwt.strategy";
import { apiEnv } from "../../environments/environments";

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

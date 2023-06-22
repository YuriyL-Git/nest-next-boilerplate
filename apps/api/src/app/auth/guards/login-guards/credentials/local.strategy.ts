import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "@libs/api/generated-db-types";
import { AuthenticationService } from "../../../authentication.service";
import { MessageStrings } from "../../../../consts/message-strings";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenticationService) {
    super({ usernameField: "email", passwordField: "password" }); // email will be passed to validate function
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.findCredentials(email, password);

    if (user == null) {
      throw new UnauthorizedException();
    }

    if (!user.isVerified) {
      throw new UnauthorizedException(MessageStrings.UserNotVerified);
    }

    return user;
  }
}

import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthenticationService } from "../../../authentication.service";
import { Strategy } from "passport-custom";
import { OAuth2Client } from "google-auth-library";
import { environment } from "@libs/shared/environement";
import { User } from "@libs/api/generated-db-types";

const {
  googleAuth: { googleClientId, googleClientSecret },
} = environment;

const googleClient = new OAuth2Client(googleClientId, googleClientSecret);

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(private readonly authService: AuthenticationService) {
    super(async (req, done) => {
      let error = null;
      let user: User | null = null;

      try {
        const ticket = await googleClient.verifyIdToken({
          idToken: req.body.googleToken,
        });

        const { email, picture, name } = ticket.getPayload();

        user = await this.authService.findUserByEmail(email);
        if (!user) {
          user = await this.authService.signUpWithEmail({
            data: {
              email,
              name,
              isVerified: true,
              icon: picture,
            },
          });
        }
      } catch {
        error = new UnauthorizedException();
      }

      done(error, user);
    }); // email will be passed to validate function
  }
}

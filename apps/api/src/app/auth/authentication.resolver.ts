import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";
import { UseGuards } from "@nestjs/common";
import { User } from "@libs/api/generated-db-types";
import { IUserContext } from "./dto/types";
import { SetCredentialsAuthGuard } from "./guards/login-guards/credentials/set-credentials.auth.guard";
import { LoginInput } from "./dto/credentials.login.input";
import { SetGoogleAuthGuard } from "./guards/login-guards/google/set-google-auth.guard";
import { GoogleLoginInput, VerificationInput } from "./dto/inputs";
import { PublicGuard } from "./guards/public-guard/public-guard";

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @PublicGuard()
  @UseGuards(SetCredentialsAuthGuard)
  @Mutation(() => User)
  login(@Args("loginInput") loginInput: LoginInput, @Context() context: IUserContext) {
    const { user } = context;
    return this.authenticationService.login(user);
  }

  @PublicGuard()
  @UseGuards(SetGoogleAuthGuard)
  @Mutation(() => User)
  loginWithGoogle(
    @Args("googleLoginInput") googleLoginInput: GoogleLoginInput,
    @Context() context: IUserContext,
  ) {
    const { user } = context;
    return this.authenticationService.login(user);
  }

  @PublicGuard()
  @Mutation(() => User)
  signUp(@Args("signUpInput") signUpInput: LoginInput) {
    return this.authenticationService.signUpWithCredentials(signUpInput);
  }

  @PublicGuard()
  @Mutation(() => User)
  verifyEmail(@Args("verificationInput") verificationInput: VerificationInput) {
    const { verificationToken } = verificationInput;
    return this.authenticationService.verifyEmail(verificationToken);
  }
}

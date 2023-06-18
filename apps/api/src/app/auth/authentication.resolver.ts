import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";
import { UseGuards } from "@nestjs/common";
import { User } from "@libs/api/generated-db-types";
import { IUserContext } from "./dto/types";
import { SetCredentialsAuthGuard } from "./guards/set-auth-guards/credentials/set-credentials.auth.guard";
import { LoginInput } from "./dto/credentials.login.input";
import { SetGoogleAuthGuard } from "./guards/set-auth-guards/google/set-google-auth.guard";
import { GoogleLoginInput } from "./dto/google.login.input";

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(SetCredentialsAuthGuard)
  @Mutation(() => User)
  login(@Args("loginInput") loginInput: LoginInput, @Context() context: IUserContext) {
    const { user } = context;
    return this.authenticationService.login(user);
  }

  @UseGuards(SetGoogleAuthGuard)
  @Mutation(() => User)
  loginWithGoogle(
    @Args("googleLoginInput") googleLoginInput: GoogleLoginInput,
    @Context() context: IUserContext,
  ) {
    const { user } = context;
    return this.authenticationService.login(user);
  }

  @Mutation(() => User)
  signUp(@Args("signUpInput") signUpInput: LoginInput) {
    return this.authenticationService.signUpWithCredentials(signUpInput);
  }
}

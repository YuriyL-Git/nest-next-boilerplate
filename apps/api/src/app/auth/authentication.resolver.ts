import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";
import { UseGuards } from "@nestjs/common";
import { User } from "@libs/api/generated-db-types";
import { IUserContext } from "./guards/types";
import { SetAuthGuard } from "./guards/set-auth.guard";
import { LoginInput } from "./dto/login.input";

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(SetAuthGuard)
  @Mutation(() => User)
  login(@Args("loginInput") loginInput: LoginInput, @Context() context: IUserContext) {
    const { user } = context;

    return this.authenticationService.login(user);
  }

  @Mutation(() => User)
  signUp(@Args("signUpInput") signUpInput: LoginInput) {
    return this.authenticationService.signUp(signUpInput);
  }
}

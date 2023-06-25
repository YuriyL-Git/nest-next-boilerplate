import { Field, InputType } from "@nestjs/graphql";
import * as Validator from "class-validator";

@InputType()
export class GoogleLoginInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  googleToken: string;
}

@InputType()
export class VerificationInput {
  @Field(() => String)
  @Validator.IsString()
  verificationToken: string;
}

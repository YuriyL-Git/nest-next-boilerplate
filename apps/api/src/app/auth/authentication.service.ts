import { Injectable } from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { CreateOneUserArgs, User } from "@libs/api/generated-db-types";
import { LoginInput } from "./dto/credentials.login.input";
import { UserService } from "../user-feature/user.service";

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async findCredentials(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    if (!user) return null;
    return user;
  }

  login(user: User) {
    return user;
  }

  async signUpWithCredentials(signUpInput: LoginInput) {
    const { email, password } = signUpInput;
    return this.userService.createWithCredentials({
      data: { email, password, isVerified: false },
    });
  }

  async signUpWithEmail(createOneUserArgs: CreateOneUserArgs) {
    const { data } = createOneUserArgs;
    return this.userService.create({
      data,
    });
  }
}

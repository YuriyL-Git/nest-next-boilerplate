import { Injectable } from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { UserService } from "@next-nest-boilerplate/api/feature-user";
import { User } from "@next-nest-boilerplate/api/generated-db-types";
import { LoginInput } from "./dto/login.input";

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async findUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    if (!user) return null;
    console.log("UESER", user);
    console.log("user.password", user.password);
    console.log("password", password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("IS MATCH", isMatch);
    if (!isMatch) return null;

    return user;
  }

  login(user: User) {
    return user;
  }

  async signUp(signUpInput: LoginInput) {
    const { email, password } = signUpInput;
    return this.userService.create({ data: { email, password } });
  }
}

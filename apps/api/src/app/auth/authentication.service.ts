import { Injectable } from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { User } from "@libs/api/generated-db-types";
import { LoginInput } from "./dto/login.input";
import { UserService } from "../user-feature/user.service";

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async findUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
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

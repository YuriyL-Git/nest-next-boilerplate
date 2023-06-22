import { Injectable } from "@nestjs/common";
import { randomBytes } from "node:crypto";
import { promisify } from "node:util";
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
    return isMatch ? user : null;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    return user || null;
  }

  login(user: User) {
    return user;
  }

  async signUpWithCredentials(signUpInput: LoginInput) {
    const { email, password } = signUpInput;

    const randomBytesAsync = promisify(randomBytes);
    const bytesGenerated = await randomBytesAsync(48);
    const verificationToken = bytesGenerated.toString("base64url").replaceAll(/\W/g, "");

    return this.userService.createWithCredentials({
      data: { email, password, isVerified: false, verificationToken },
    });
  }

  async signUpWithEmailProvider(createOneUserArgs: CreateOneUserArgs) {
    const { data } = createOneUserArgs;
    return this.userService.create({
      data,
    });
  }
}

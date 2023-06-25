import { Injectable, UnauthorizedException } from "@nestjs/common";
import { randomBytes } from "node:crypto";
import { promisify } from "node:util";
import * as bcrypt from "bcrypt";
import { CreateOneUserArgs, User } from "@libs/api/generated-db-types";
import { LoginInput } from "./dto/credentials.login.input";
import { UserService } from "../user-feature/user.service";
import { sendMail } from "../../services/nodemailer";
import { MessageStrings } from "../../consts/message-strings";

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

    let user: User | null = null;

    try {
      user = await this.userService.createWithCredentials({
        data: { email, password, isVerified: false, verificationToken },
      });
    } catch {
      throw new UnauthorizedException(MessageStrings.UserAlreadyExists);
    }

    if (user) {
      sendMail({
        subject: "Verification link",
        receivers: [email],
        htmlBody: `<a href="https://${process.env.DOMAIN_NAME}/verification/${verificationToken}">Click here to verify Your e-mail</a>`,
      });
    }
    return user;
  }

  async signUpWithEmailProvider(createOneUserArgs: CreateOneUserArgs) {
    const { data } = createOneUserArgs;
    return this.userService.create({
      data,
    });
  }

  async verifyEmail(verificationToken: string) {
    const user = await this.userService.findOne({ where: { verificationToken } });
    if (!user) {
      throw new UnauthorizedException(MessageStrings.InvalidVerificationToken);
    }

    return await this.userService.update({
      where: { id: user.id },
      data: { isVerified: true, verificationToken: null },
    });
  }
}

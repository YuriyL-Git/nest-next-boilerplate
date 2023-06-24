import { plainToInstance, Type } from "class-transformer";
import { IsNotEmpty, IsUrl, Matches, validateSync } from "class-validator";
import {
  IsBoolean,
  IsDefined,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";
import "reflect-metadata";

import { environment } from "../../libs/shared/environement/src/index";
import * as process from "process";

type ApiEnv = typeof environment;

export class ApiEnvVo implements ApiEnv {
  @IsBoolean()
  public isProd: boolean;

  @IsString()
  public cookieSecret: string;

  @IsString()
  public jwtSecret: string;

  @IsString()
  public webAppHost: string;

  @IsBoolean()
  public corsEnabled: boolean;

  @IsBoolean()
  public cookiesSecure: boolean;

  @IsString()
  public corsOrigin: string;

  @IsString()
  public apiRoute: string;

  @IsString()
  public nextServerAccountId: string;

  @IsString()
  public nextServerPassword: string;

  @IsNumber()
  public jwtExpiresSeconds: number;

  @IsString()
  public domainName: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => Db)
  public db: Db;

  @IsDefined()
  @ValidateNested()
  @Type(() => Api)
  public api: Api;

  @IsDefined()
  @ValidateNested()
  @Type(() => GoogleAuth)
  public googleAuth: GoogleAuth;

  @IsDefined()
  @ValidateNested()
  @Type(() => NodeMailer)
  public nodemailer: NodeMailer;
}

class Db {
  @IsNotEmpty()
  @IsString()
  public url: string;
}

class Api {
  @IsNumber()
  public port: number;

  @IsString()
  public gqlUrl: string;

  @IsString()
  public apiUrl: string;
}

class GoogleAuth {
  @IsNotEmpty()
  @IsString()
  public googleClientId: string;

  @IsNotEmpty()
  @IsString()
  public googleClientSecret: string;
}

class NodeMailer {
  @IsNotEmpty()
  @IsString()
  public googleRefreshTokenEmail: string;

  @IsNotEmpty()
  @IsString()
  public googleClientSecretEmail: string;

  @IsNotEmpty()
  @IsString()
  public googleClientIdEmail: string;

  @IsNotEmpty()
  @IsString()
  public mailAddress: string;

  @IsNotEmpty()
  @IsString()
  public googleAccessTokenEmail: string;
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, environment);
const errors = validateSync(apiEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}

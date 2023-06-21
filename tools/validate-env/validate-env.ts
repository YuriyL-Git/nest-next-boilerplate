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

  @IsDefined()
  @ValidateNested()
  @Type(() => EnvDbVo)
  public db: EnvDbVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => EnvApiVo)
  public api: EnvApiVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => EnvGoogleAuthVo)
  public googleAuth: EnvGoogleAuthVo;
}

class EnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string;
}

class EnvApiVo {
  @IsNumber()
  public port: number;

  @IsString()
  public gqlUrl: string;

  @IsString()
  public apiUrl: string;
}

class EnvGoogleAuthVo {
  @IsNotEmpty()
  @IsString()
  public googleClientId: string;

  @IsNotEmpty()
  @IsString()
  public googleClientSecret: string;
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, environment);
const errors = validateSync(apiEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}

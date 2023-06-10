import { plainToInstance, Type } from "class-transformer";
import { IsNotEmpty, IsUrl, validateSync } from "class-validator";
import {
  IsBoolean,
  IsDefined,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";
import "reflect-metadata";
import { environment } from "../../libs/shared/environement/src/index";

type ApiEnv = typeof environment;

export class ApiEnvVo implements ApiEnv {
  @IsBoolean()
  public isProd: boolean;

  @IsString()
  public cookieSecret: string;

  @IsString()
  public jwtSecret: string;

  @IsString()
  public corsOrigin: string;

  @IsString()
  public apiRoute: string;

  @IsString()
  public nextServerAccountId: string;

  @IsNumber()
  public jwtExpiresSeconds: number;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvDbVo)
  public db: ApiEnvDbVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvApiVo)
  public api: ApiEnvApiVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => WebStorageVo)
  public storage: WebStorageVo;
}

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string;
}

class ApiEnvApiVo {
  @IsNumber()
  public port: number;

  @IsString()
  public gqlUrl: string;
}

class WebStorageVo {
  @IsUrl()
  public url: string;

  @IsString()
  public endpoint: string;
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, environment);
const errors = validateSync(apiEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}

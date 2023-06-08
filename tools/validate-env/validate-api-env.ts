import { plainToInstance, Type } from "class-transformer";
import { apiEnv } from "../../apps/api/src/environments/environments";
import { IsNotEmpty, validateSync } from "class-validator";
import {
  IsBoolean,
  IsDefined,
  IsNumber,
  IsString,
  ValidateNested
} from "class-validator";
import "reflect-metadata";

type ApiEnv = typeof apiEnv;

export class ApiEnvVo implements ApiEnv {
  @IsBoolean()
  public isProd: boolean;

  @IsString()
  public cookieSecret: string;

  @IsString()
  public jwtSecret: string;

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
}

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string;
}

class ApiEnvApiVo {
  @IsNumber()
  public port: number;
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, apiEnv);
const errors = validateSync(apiEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}

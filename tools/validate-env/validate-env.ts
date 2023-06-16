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
import * as fs from "node:fs/promises";

const encoding = "utf8";
import { environment } from "../../libs/shared/environement/src/index";
import { watch } from "chokidar";
import { createHash } from "crypto";
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

const { isProd } = environment;

const envPath = "./.env";
const checkSumPath = "./tools/validate-env/env.sum";

const getCheckSum = (content: string) => {
  const cleanContent = content
    .split("\n")
    .map((line) => line.replace(/\\n/g, ""))
    .filter((line) => line.trim().length > 0 && !line.trim().startsWith("#"))
    .join("");

  return createHash("md5").update(cleanContent).digest("hex");
};

if (isProd) {
  setTimeout(async () => {
    const content = await fs.readFile(envPath, encoding);
    const checkSum = await fs.readFile(checkSumPath, encoding);
    if (checkSum !== getCheckSum(content)) {
      console.error(
        "!! ENV FILE WAS UPDATED. Run yarn env-gen and paste env content to github ENV_FILE secret",
      );
      process.exit(1);
    }
  }, 0);
} else {
  watch(envPath).on("all", async () => {
    const content = await fs.readFile(envPath, encoding);
    const checkSum = getCheckSum(content);
    fs.writeFile(checkSumPath, checkSum, encoding);
  });
}

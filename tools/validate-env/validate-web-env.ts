import { plainToInstance } from "class-transformer";
import { IsString, validateSync } from "class-validator";
import { webEnv } from "../../apps/web/environments/environments";

import { IsBoolean, IsUrl, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import "reflect-metadata";

type WebEnv = typeof webEnv;

export class WebEnvVo implements WebEnv {
  @IsBoolean()
  public isProd: boolean;

  @ValidateNested()
  @Type(() => ApiVo)
  public api: ApiVo;

  @ValidateNested()
  @Type(() => WebStorageVo)
  public storage: WebStorageVo;
}

class ApiVo {
  @IsUrl({ require_tld: false })
  public gqlUrl: string;
}

class WebStorageVo {
  @IsUrl()
  public url: string;

  @IsString()
  public endpoint: string;
}

const webEnvVoInstance = plainToInstance(WebEnvVo, webEnv);
const errors = validateSync(webEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}

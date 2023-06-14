import * as path from "path";
import * as fs from "node:fs/promises";

const encoding = "utf8";

interface KeyValuePair {
  key: string;
  value: string;
}

interface TransformFuncProps {
  prevValue: string;
  newValue: string;
}

export type TransformFunc = (props: TransformFuncProps) => string;

export async function updateEnvFile(
  envFileName: string,
  keys: Array<KeyValuePair>,
  transformFunc?: TransformFunc,
) {
  const envFilePath = path.join(__dirname, "..", "..", envFileName);
  let envData = await fs.readFile(envFilePath, encoding);

  for (const { key, value } of keys) {
    const keyLineRegex = new RegExp(`^${key}=.*$`, "gm");
    const resultValue = transformFunc
      ? transformFunc({
          prevValue: envData.match(keyLineRegex)?.[0]?.split("=")?.[1] ?? "",
          newValue: value,
        })
      : value;
    envData = envData.replace(keyLineRegex, `${key}=${resultValue}`);
  }

  await fs.writeFile(envFilePath, envData, encoding);
}

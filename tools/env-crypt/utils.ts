import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";
import * as process from "process";

const algorithm = "aes-256-ctr";

const getKey = (encryptionKey: string) => {
  return createHash("sha256")
    .update(String(encryptionKey))
    .digest("base64")
    .substring(0, 32);
};

const getCheckSum = (text: string) => {
  return createHash("md5").update(text).digest("hex");
};

export const encryptText = (text: string): string => {
  const key = getKey(process.env.ENV_ENCRYPTION_KEY);

  const bufferText = Buffer.from(text);
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);

  const checksum = getCheckSum(text);
  const result = Buffer.concat([iv, cipher.update(bufferText), cipher.final()]).toString(
    "base64",
  );

  return `${checksum}.${result}`;
};

export const decryptText = (text: string, encryptionKey: string): string => {
  const splitIndex = text.indexOf(".");
  const checksum = text.slice(0, splitIndex);
  const encryptedText = text.slice(splitIndex + 1, text.length);
  const key = getKey(encryptionKey);

  const encrypted = Buffer.from(encryptedText, "base64");
  const iv = encrypted.slice(0, 16);
  const encryptedData = encrypted.slice(16);
  const decipher = createDecipheriv(algorithm, key, iv);

  const result = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final(),
  ]).toString();

  if (checksum !== getCheckSum(result)) {
    throw new Error("Invalid encryption key");
  }

  return result;
};

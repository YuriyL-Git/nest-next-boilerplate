import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";
import * as process from "process";

const algorithm = "aes-256-ctr";

const getKey = (input: string) => {
  return createHash("sha256").update(String(input)).digest("base64").substring(0, 32);
};

export const encryptText = (text: string): string => {
  const key = getKey(process.env.ENV_ENCRYPTION_KEY);

  const bufferText = Buffer.from(text);
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);

  return Buffer.concat([iv, cipher.update(bufferText), cipher.final()]).toString(
    "base64",
  );
};

export const decryptText = (encryptedText: string, encryptionKey: string): string => {
  const key = getKey(encryptionKey);

  const encrypted = Buffer.from(encryptedText, "base64");
  const iv = encrypted.slice(0, 16);
  const encryptedData = encrypted.slice(16);
  const decipher = createDecipheriv(algorithm, key, iv);

  return Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString();
};

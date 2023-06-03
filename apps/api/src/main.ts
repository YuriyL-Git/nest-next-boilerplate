import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import helmet from "@fastify/helmet";
import { apiEnv } from "./environments/environments";

const { api, isProd } = apiEnv;
const host = isProd ? "0.0.0.0" : "localhost";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // TODO: contentSecurityPolicy should turn on in production
  await app.register(helmet, { contentSecurityPolicy: isProd });
  app.enableCors();

  const port = api.port;
  await app.listen(port, host);
  Logger.log(`🚀 Application playground is running on: http://${host}:${port}/graphiql`);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch((error) => console.log(error));

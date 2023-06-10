import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import helmet from "@fastify/helmet";
import { apiEnv } from "./environments/environments";
import fastifyCookie from "@fastify/cookie";

const { api, isProd, cookieSecret } = apiEnv;
const host = isProd ? "0.0.0.0" : "localhost";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const developmentContentSecurityPolicy = {
    directives: {
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://unpkg.com/"],
    },
  };

  await app.register(fastifyCookie, { secret: cookieSecret });

  await app.register(helmet, {
    contentSecurityPolicy: isProd ? true : developmentContentSecurityPolicy,
  });
  app.enableCors({
    origin: isProd ? "proddomain" : "http://localhost:4200",
    credentials: true,
  });

  const port = api.port;
  await app.listen(port, host);
  Logger.log(`🚀 Application playground is running on: http://${host}:${port}/graphiql`);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch((error) => console.log(error));

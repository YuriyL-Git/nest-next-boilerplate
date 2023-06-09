import { Logger } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import helmet from "@fastify/helmet";
import fastifyCookie from "@fastify/cookie";
import { environment } from "@libs/shared/environement";
import { CheckAuthGuard } from "./app/auth/guards/check-auth-guard/check-auth.guard";

const { api, isProd, cookieSecret, corsOrigin, webAppHost, corsEnabled } = environment;
const host = isProd ? "0.0.0.0" : "localhost";
const whitelistOrigin = new Set([webAppHost, corsOrigin]);

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
    origin:
      isProd && corsEnabled
        ? function (origin, callback) {
            if (whitelistOrigin.has(origin)) {
              callback(null, true);
            } else {
              Logger.log("Blocked cors for:", origin);
              callback(new Error(`Not allowed by CORS: ${origin}`));
            }
          }
        : "*",
    allowedHeaders:
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe",
    methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
    credentials: true,
  });

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new CheckAuthGuard(reflector));

  const port = api.port;
  await app.listen(port, host);
  Logger.log(`🚀 Application playground is running on: http://${host}:${port}/graphiql`);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch((error) => console.log(error));

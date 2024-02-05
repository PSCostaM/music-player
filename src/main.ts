import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up CORS
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:8081',
    // You can set other CORS options if needed
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();

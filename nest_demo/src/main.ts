import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // 指定范型参数以支持静态资源访问
  // 静态资源访问
  app.useStaticAssets('public', {
    prefix: '/static',
  });
  await app.listen(3000);
}
bootstrap();

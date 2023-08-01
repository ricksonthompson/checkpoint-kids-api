import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/modules/app.module';
import { RegisterChildrenCheckUseCase } from '@checkpoint/check/application/use-cases/register-children-check';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log(`🚀 server running on port ${3000}...`);
  });
}
bootstrap();

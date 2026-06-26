import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  const config = new DocumentBuilder()
    .setTitle('POC NestJS + BullMQ')
    .setDescription(
      'POC de sistema de fila: o endpoint assíncrono enfileira um job no Redis, ' +
        'processado por um consumer.',
    )
    .setVersion('1.0')
    .addTag('relatorio')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  logger.log(`Aplicação rodando em http://localhost:${port}`);
  logger.log(`Swagger disponível em http://localhost:${port}/docs`);
  logger.log(`Bull Board (dashboard) em http://localhost:${port}/queues`);
}
bootstrap();

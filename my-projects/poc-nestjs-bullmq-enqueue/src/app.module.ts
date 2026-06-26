import { BullModule } from '@nestjs/bullmq';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { RelatorioModule } from './relatorio/relatorio.module';
import { BullBoardAuthMiddleware } from './bull-board-auth.middleware';

const BULL_BOARD_ROUTE = '/queues';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Conexão global com o Redis.
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get<string>('REDIS_HOST', 'localhost'),
          port: config.get<number>('REDIS_PORT', 6379),
        },
      }),
    }),
    // Dashboard do BullMQ (Bull Board).
    BullBoardModule.forRoot({
      route: BULL_BOARD_ROUTE,
      adapter: ExpressAdapter,
    }),
    RelatorioModule,
  ],
})
export class AppModule implements NestModule {
  // Protege a rota do dashboard com Basic Auth (só quando há credenciais).
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(BullBoardAuthMiddleware)
      .forRoutes(BULL_BOARD_ROUTE, `${BULL_BOARD_ROUTE}/(.*)`);
  }
}

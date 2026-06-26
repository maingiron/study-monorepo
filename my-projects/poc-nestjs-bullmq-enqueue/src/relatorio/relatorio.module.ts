import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { RelatorioController } from './relatorio.controller';
import { RelatorioService } from './relatorio.service';
import { RelatorioProcessor } from './relatorio.processor';
import { RELATORIO_QUEUE } from './relatorio.constants';

@Module({
  imports: [
    BullModule.registerQueue({ name: RELATORIO_QUEUE }),
    // Expõe a fila no dashboard do Bull Board.
    BullBoardModule.forFeature({
      name: RELATORIO_QUEUE,
      adapter: BullMQAdapter,
    }),
  ],
  controllers: [RelatorioController],
  providers: [RelatorioService, RelatorioProcessor],
})
export class RelatorioModule {}

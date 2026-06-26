import { InjectQueue } from "@nestjs/bullmq";
import { Injectable, Logger } from "@nestjs/common";
import { Queue } from "bullmq";
import { GerarRelatorioDto } from "./dto/gerar-relatorio.dto";
import { RELATORIO_QUEUE } from "./relatorio.constants";

@Injectable()
export class RelatorioService {
  private readonly logger = new Logger(RelatorioService.name);

  constructor(@InjectQueue(RELATORIO_QUEUE) private readonly fila: Queue) {}

  async gerarRelatorio(dto: GerarRelatorioDto) {
    this.logger.log(
      `[SERVICE] Solicitação recebida | usuarioId=${dto.usuarioId}`,
    );

    const job = await this.fila.add(
      "gerar-relatorio",
      { usuarioId: dto.usuarioId },
      {
        // Remove o job concluído do Redis 30s após o sucesso (age em segundos).
        // removeOnComplete: { age: 30 },
        removeOnComplete: true,
      },
    );

    this.logger.log(`[SERVICE] Job enfileirado | id=${job.id}`);

    return {
      jobId: String(job.id),
      mensagem: "Relatório enfileirado e será processado de forma assíncrona",
    };
  }
}

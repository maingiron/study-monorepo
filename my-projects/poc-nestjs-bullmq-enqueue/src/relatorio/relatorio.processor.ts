import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job } from "bullmq";
import { RELATORIO_QUEUE } from "./relatorio.constants";

interface GerarRelatorioData {
  usuarioId: string;
}

/** Consumer da fila "relatorio": processa o job simulando tarefa pesada. */
@Processor(RELATORIO_QUEUE)
export class RelatorioProcessor extends WorkerHost {
  private readonly logger = new Logger(RelatorioProcessor.name);

  async process(job: Job<GerarRelatorioData>): Promise<unknown> {
    const { usuarioId } = job.data;
    // const duracaoMs = Math.floor(Math.random() * 5000) + 5000; // 5–10s
    const duracaoMs = 50;

    this.logger.log(
      `[CONSUMER] Iniciando | job=${job.id} usuarioId=${usuarioId} duração=${duracaoMs}ms`,
    );

    // Simula tarefa pesada
    await new Promise((resolve) => setTimeout(resolve, duracaoMs));

    const resultado = {
      usuarioId,
      url: `https://storage.local/relatorios/${usuarioId}-${job.id}.pdf`,
      geradoEm: new Date().toISOString(),
    };

    this.logger.log(
      `[CONSUMER] Concluído | job=${job.id} url=${resultado.url}`,
    );
    return resultado;
  }

  @OnWorkerEvent("active")
  onActive(job: Job): void {
    this.logger.log(`[EVENT] Job iniciando | id=${job.id}`);
  }

  @OnWorkerEvent("completed")
  onCompleted(job: Job): void {
    this.logger.log(`[EVENT] Job concluído | id=${job.id}`);
  }

  @OnWorkerEvent("failed")
  onFailed(job: Job, err: Error): void {
    this.logger.error(`[EVENT] Job falhou | id=${job?.id} erro=${err.message}`);
  }
}

import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GerarRelatorioDto } from './dto/gerar-relatorio.dto';
import { RelatorioService } from './relatorio.service';

@ApiTags('relatorio')
@Controller()
export class RelatorioController {
  private readonly logger = new Logger(RelatorioController.name);

  constructor(private readonly relatorioService: RelatorioService) {}

  @Post('gerar-relatorio')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'Dispara a geração assíncrona de um relatório',
    description: 'Enfileira um job na fila "relatorio" (processado em 5–10s).',
  })
  async gerarRelatorio(@Body() dto: GerarRelatorioDto) {
    this.logger.log(`[CONTROLLER] POST /gerar-relatorio | usuarioId=${dto.usuarioId}`);
    return this.relatorioService.gerarRelatorio(dto);
  }
}

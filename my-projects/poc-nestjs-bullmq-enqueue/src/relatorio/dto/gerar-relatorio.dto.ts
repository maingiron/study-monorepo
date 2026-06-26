import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GerarRelatorioDto {
  @ApiProperty({ example: 'user-42', description: 'Usuário solicitante' })
  @IsString()
  @IsNotEmpty()
  usuarioId: string;
}

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

/**
 * Basic Auth opcional para o dashboard do Bull Board (/queues).
 *
 * - Sem `QUEUES_USER`/`QUEUES_PASS` definidos → rota liberada (dev local).
 * - Com as variáveis definidas → exige usuário/senha.
 *
 * Sempre defina as credenciais antes de expor a app fora do localhost.
 */
@Injectable()
export class BullBoardAuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(BullBoardAuthMiddleware.name);

  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const user = this.config.get<string>('QUEUES_USER');
    const pass = this.config.get<string>('QUEUES_PASS');

    if (!user || !pass) {
      return next();
    }

    const [scheme, encoded] = (req.headers.authorization ?? '').split(' ');
    if (scheme === 'Basic' && encoded) {
      const [reqUser, reqPass] = Buffer.from(encoded, 'base64')
        .toString()
        .split(':');
      if (reqUser === user && reqPass === pass) {
        return next();
      }
    }

    this.logger.warn('[BULL-BOARD] Tentativa de acesso não autorizada');
    res.setHeader('WWW-Authenticate', 'Basic realm="Bull Board"');
    res.status(401).send('Autenticação necessária');
  }
}

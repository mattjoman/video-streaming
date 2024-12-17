import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    // Log the incoming request
    this.logger.log(
      `${method} ${originalUrl} - ${userAgent}`
    );

    // Track response time
    const start = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      const duration = Date.now() - start;

      // Log the response
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength}b - ${duration}ms`
      );
    });

    next();
  }
} 
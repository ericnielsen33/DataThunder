
import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req: Request, res, next) => {
            const { method, url, body } = req;
            console.log(`METHOD: ${method} URL: ${url} BODY: ${body}`);
            next();
        };
    }
}
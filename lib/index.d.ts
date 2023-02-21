import { Request, Response, NextFunction } from 'express';
export declare const errorMiddleware: (err: any, req: Request, res: Response, next: NextFunction) => void;
export declare const asyncError: (passedFunction: Function) => (req: Request, res: Response, next: NextFunction) => void;
export declare class ErrorHandler extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}

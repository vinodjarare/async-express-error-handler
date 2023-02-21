import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export const asyncError = (passedFunction: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(passedFunction(req, res, next)).catch(next);
};

export class ErrorHandler extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

import { ErrorType, ErrorValidation, ErrorResponse } from './types';
import { HttpException} from '@nestjs/common';

export class CustomError extends HttpException {
  private errorType: ErrorType;
  private errors: string[] | null;
  private errorRaw: any;
  private errorsValidation: ErrorValidation[] | null;

  constructor(
    httpStatusCode: number,
    errorType: ErrorType,
    message: string,
    errors: string[] | null = null,
    errorRaw: any = null,
    errorsValidation: ErrorValidation[] | null = null,
  ) {
    super(
      {
        statusCode: httpStatusCode,
        error: errorType,
        message: message,
        errors: errors,
        errorRaw: errorRaw,
        errorsValidation: errorsValidation,
      },
      httpStatusCode,
    );

    this.errorType = errorType;
    this.errors = errors;
    this.errorRaw = errorRaw;
    this.errorsValidation = errorsValidation;
  }

  // get JSON(): ErrorResponse {
  //   return {
  //     errorType: this.errorType,
  //     errorMessage: this.message,
  //     errors: this.errors,
  //     errorRaw: this.errorRaw,
  //     errorsValidation: this.errorsValidation,
  //     stack: this.stack || '', // A propriedade 'stack' pode ser 'null' em algumas situações
  //   };
  // }
}
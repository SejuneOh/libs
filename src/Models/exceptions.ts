export interface Errors {
  message: string[];
}

export interface RestException {
  title: string;
  status: number;
  instance: string;
  traceId: string;
  errors: Errors;
}

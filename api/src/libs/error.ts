class HttpException extends Error {
  status;
  constructor(msg: string, status: number) {
    super(msg);
    this.status = status;
  }
}

class BadRequestException extends HttpException {
  constructor(msg?: string) {
    super(msg || 'Bad Request', 400);
  }
}
class UnauthorizedException extends HttpException {
  constructor(msg?: string) {
    super(msg || 'Unauthorized', 401);
  }
}
class ForbiddenException extends HttpException {
  constructor(msg?: string) {
    super(msg || 'Forbidden', 403);
  }
}
class NotFoundException extends HttpException {
  constructor(msg?: string) {
    super(msg || 'Not Found', 404);
  }
}
class MethodNotAllowedException extends HttpException {
  constructor(msg?: string) {
    super(msg || 'Method Not Allowed', 405);
  }
}
class InternalServerErrorException extends HttpException {
  constructor(msg?: string) {
    super(msg || 'Internal Server Error', 500);
  }
}

export {
  HttpException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  MethodNotAllowedException,
  InternalServerErrorException,
};

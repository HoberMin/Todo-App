import type { RequestHandler } from 'express';

import { ForbiddenException, UnauthorizedException } from '@/libs/error';

import { ERROR_MESSAGE } from '../constants';

export const signedGuard: RequestHandler = (req, _res, next) => {
  if (!req.session.userId) return next(new UnauthorizedException(ERROR_MESSAGE.UNAUTHORIZED));
  return next();
};

export const unsignedGuard: RequestHandler = (req, _res, next) => {
  if (req.session.userId) return next(new ForbiddenException());
  return next();
};

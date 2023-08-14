import type { Handler } from 'express';
import { z } from 'zod';

import { BadRequestException } from '@/libs/error';

import { ERROR_MESSAGE } from '../constants';

const idSchema = z
  .string({ required_error: ERROR_MESSAGE.VALIDATION.ID.REQUIRED })
  .regex(/^\S+$/, { message: ERROR_MESSAGE.VALIDATION.ID.SPACE })
  .min(5, { message: ERROR_MESSAGE.VALIDATION.ID.MIN })
  .max(20, { message: ERROR_MESSAGE.VALIDATION.ID.MAX });

const pwSchema = z
  .string({ required_error: ERROR_MESSAGE.VALIDATION.PW.REQUIRED })
  .regex(/^\S+$/, { message: ERROR_MESSAGE.VALIDATION.PW.SPACE })
  .min(5, { message: ERROR_MESSAGE.VALIDATION.PW.MIN })
  .max(20, { message: ERROR_MESSAGE.VALIDATION.PW.MAX });

export const authValidator: Handler = (req, _res, next) => {
  const { id, pw } = req.body;

  try {
    idSchema.parse(id);
    pwSchema.parse(pw);
  } catch (e) {
    return next(e);
  }

  next();
};

export const signupValidator: Handler = (req, _res, next) => {
  const { pw, pwconfirm } = req.body;

  if (pw !== pwconfirm) return next(new BadRequestException(ERROR_MESSAGE.VALIDATION.PW_CONFIRM));

  next();
};

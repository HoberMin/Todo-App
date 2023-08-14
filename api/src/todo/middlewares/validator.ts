import type { Handler } from 'express';
import { z } from 'zod';

import { ERROR_MESSAGE } from '../constants';

const idErrorMessage = { message: ERROR_MESSAGE.TODO_ID };

const todoIdStringSchema = z.string().regex(/^[0-9]+$/, idErrorMessage);
const todoIdNumberSchema = z
  .number()
  .int(idErrorMessage)
  .positive(idErrorMessage)
  .finite(idErrorMessage);
const contentSchema = z.string().trim().min(1, { message: ERROR_MESSAGE.CONTENT });
const checkedSchema = z.boolean();

export const todoIdValidator: Handler = (req, _res, next) => {
  const { id } = req.params;

  try {
    todoIdStringSchema.parse(id);
    todoIdNumberSchema.parse(Number(id));
  } catch (e) {
    return next(e);
  }

  next();
};

export const updateValidator: Handler = (req, _res, next) => {
  const { content, checked } = req.body;

  try {
    req.body.content = contentSchema.optional().parse(content);
    checkedSchema.optional().parse(checked);
  } catch (e) {
    return next(e);
  }

  next();
};

export const createValidator: Handler = (req, _res, next) => {
  const { content } = req.body;

  try {
    req.body.content = contentSchema.parse(content);
  } catch (e) {
    return next(e);
  }

  next();
};

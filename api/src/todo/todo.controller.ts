import express from 'express';

import { signedGuard } from '@/auth/guards/auth.guard';
import { MethodNotAllowedException } from '@/libs/error';

import { SUCCESS_MESSAGE } from './constants';
import { createValidator, todoIdValidator, updateValidator } from './middlewares/validator';
import TodoService from './todo.service';

const router = express.Router();

router
  .route('/todo')
  .post(signedGuard, createValidator, async (req, res, next) => {
    const { content } = req.body;
    const { userId } = req.session;
    try {
      const todo = await TodoService.create({ content }, userId!);
      res.status(201).json(todo);
    } catch (e) {
      next(e);
    }
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

router
  .route('/todo/:id')
  .put(signedGuard, todoIdValidator, updateValidator, async (req, res, next) => {
    const { id } = req.params;
    const { content, checked } = req.body;
    try {
      const todo = await TodoService.update({ content, checked }, Number(id));
      res.json(todo);
    } catch (e) {
      next(e);
    }
  })
  .delete(signedGuard, todoIdValidator, async (req, res, next) => {
    const { id } = req.params;
    try {
      await TodoService.delete(Number(id));
      res.json({ message: SUCCESS_MESSAGE.DELETE });
    } catch (e) {
      next(e);
    }
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

router
  .route('/todos')
  .get(signedGuard, async (req, res, next) => {
    const { userId } = req.session;
    try {
      const todos = await TodoService.findManyByUserId(userId!);
      res.json({ todos });
    } catch (e) {
      next(e);
    }
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

export default router;

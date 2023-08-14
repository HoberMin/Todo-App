import express from 'express';

import { MethodNotAllowedException } from '@/libs/error';

import AuthService from './auth.service';
import { SUCCESS_MESSAGE } from './constants';
import { signedGuard, unsignedGuard } from './guards/auth.guard';
import { authValidator, signupValidator } from './middlewares/validator';

const router = express.Router();

router
  .route('/signin')
  .post(unsignedGuard, authValidator, async (req, res, next) => {
    const { id, pw } = req.body;

    try {
      await AuthService.signin(id, pw);
      req.session.userId = id;
      res.json({ message: SUCCESS_MESSAGE.SIGNIN });
    } catch (e) {
      next(e);
    }
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

router
  .route('/signup')
  .post(unsignedGuard, authValidator, signupValidator, async (req, res, next) => {
    const { id, pw } = req.body;

    try {
      await AuthService.signup(id, pw);
      res.status(201).json({ message: SUCCESS_MESSAGE.SIGNUP });
    } catch (e) {
      next(e);
    }
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

router
  .route('/signout')
  .post(signedGuard, (req, res, next) => {
    req.session.destroy((err) => {
      if (err) next(err);
      else res.json({ message: SUCCESS_MESSAGE.SIGNOUT });
    });
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

router
  .route('/check')
  .get(signedGuard, (req, res) => {
    const { userId } = req.session;
    res.json({ userId });
  })
  .all((_req, _res, next) => {
    next(new MethodNotAllowedException());
  });

export default router;

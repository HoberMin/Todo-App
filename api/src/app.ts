import cookieParser from 'cookie-parser';
import cors, { type CorsOptions } from 'cors';
import express, { type ErrorRequestHandler } from 'express';
import session, { type SessionOptions } from 'express-session';
import logger from 'morgan';
import SessionFileStore from 'session-file-store';
import { ZodError } from 'zod';

import authRouter from '@/auth/auth.controller';
import { HttpException } from '@/libs/error';
import todoRouter from '@/todo/todo.controller';

declare module 'express-session' {
  export interface SessionData {
    userId: string;
  }
}

const isDev = process.env.NODE_ENV === 'development'

const FileStore = SessionFileStore(session);

const sessionOption: SessionOptions = {
  store: new FileStore({ retries: 1 }),
  secret: process.env.SESSION_SECRET || 'todo',
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    secure: !isDev,
    sameSite: isDev ? 'lax' : 'none',
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
};
const corsOption: CorsOptions = {
  origin: [/^http:\/\/localhost:[0-9]+$/, /\.ngrok-free.app$/, process.env.CLIENT_DOMAIN || true],
  credentials: true,
  methods:['GET','PUT','POST','DELETE','OPTIONS']
};

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
!isDev && app.enable('trust proxy');
app.use(session(sessionOption));
app.use(cors(corsOption));

app.use('/', authRouter, todoRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  if (err instanceof HttpException) {
    return res.status(err.status).json({ message: err.message });
  }
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues[0].message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
};

app.use(errorHandler);

export default app;

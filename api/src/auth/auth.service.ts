import crypto from 'crypto';

import { BadRequestException } from '@/libs/error';
import UserService from '@/user/user.service';

import { ERROR_MESSAGE } from './constants';

export default class AuthService {
  private static makeSalt() {
    return crypto.randomBytes(64).toString('base64');
  }

  private static getHash(pw: string, salt: string) {
    const hash = crypto.pbkdf2Sync(pw, salt, 9999, 64, 'sha512').toString('base64');
    return hash;
  }

  public static async signin(id: string, pw: string) {
    const user = await UserService.findById(id);
    if (!user) throw new BadRequestException(ERROR_MESSAGE.SIGNIN);

    const hash = this.getHash(pw, user.salt);
    if (user.pw !== hash) throw new BadRequestException(ERROR_MESSAGE.SIGNIN);

    return user.id;
  }

  public static async signup(id: string, pw: string) {
    const user = await UserService.findById(id);
    if (user) throw new BadRequestException(ERROR_MESSAGE.SIGNUP);
    const salt = this.makeSalt();
    const hash = this.getHash(pw, salt);
    await UserService.create({ id, pw: hash, salt });

    return id;
  }
}

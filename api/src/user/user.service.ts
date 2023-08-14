import prisma from '@/libs/prisma';

interface UserDto {
  id: string;
  pw: string;
  salt: string;
}

export default class UserService {
  public static findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  public static create(userDto: UserDto) {
    return prisma.user.create({ data: userDto });
  }
}

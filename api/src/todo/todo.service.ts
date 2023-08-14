import { NotFoundException } from '@/libs/error';
import prisma from '@/libs/prisma';

import { ERROR_MESSAGE } from './constants';

interface CreateTodoDto {
  content: string;
}

interface UpdateTodoDto {
  content: string;
  checked: boolean;
}

export default class TodoService {
  public static create(body: CreateTodoDto, userId: string) {
    return prisma.todo.create({
      data: { content: body.content, user: { connect: { id: userId } } },
      select: { id: true, content: true, checked: true },
    });
  }

  public static async update(body: UpdateTodoDto, id: number) {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException(ERROR_MESSAGE.FIND);
    return prisma.todo.update({
      where: { id },
      data: { ...todo, ...body },
      select: { id: true, content: true, checked: true },
    });
  }
  public static async delete(id: number) {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException(ERROR_MESSAGE.FIND);
    return prisma.todo.delete({ where: { id } });
  }

  public static findManyByUserId(userId: string) {
    return prisma.todo.findMany({
      where: { user: { id: userId } },
      select: { id: true, content: true, checked: true },
    });
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInterface } from './interfaces';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private async validateEmail(email: string) {
    const exists = await this.prisma.user.findUnique({
      where: { email },
      select: { email: true },
    });

    if (!exists) return;
    throw new BadRequestException('The email is already in use.');
  }

  async create({
    name,
    lastName,
    avatar,
    email,
    backupEmail,
    phone,
    password,
    country,
    language,
    emailConfirm,
    backupEmailConfirm,
    phoneConfirm,
    twoFactorEnabled,
    twoFactorSecret,
    status,
    authProvider,
  }: CreateUserInterface) {
    await this.validateEmail(email);
    return await this.prisma.user.create({
      data: {
        name,
        lastName,
        avatar,
        email,
        backupEmail,
        phone,
        password,
        country,
        language,
        emailConfirm,
        backupEmailConfirm,
        phoneConfirm,
        twoFactorEnabled,
        twoFactorSecret,
        status,
        authProvider,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }
  async update() {}
  async delete() {}
}

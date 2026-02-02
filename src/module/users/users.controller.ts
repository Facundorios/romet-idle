import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInterface } from './interfaces';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserInterface) {
    return await this.usersService.create(data);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}

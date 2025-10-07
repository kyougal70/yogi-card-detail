import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { Cron, CronExpression } from '@nestjs/schedule';
// import axios from 'axios';

@Controller('card')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('hello')
  test() {
    return 'test';
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // async continueRequest() {
  //   await axios('https://get-detail.onrender.com/card/hello');
  // }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}

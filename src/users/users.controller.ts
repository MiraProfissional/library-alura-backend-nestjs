import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetUsersDto } from './dtos/get-users.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(@Param() getUsersDto: GetUsersDto) {
    console.log(getUsersDto);
    return 'You sent a GET request to users endpoint';
  }

  @Post()
  public postUser(@Body() postUserDto: CreateUserDto) {
    console.log(postUserDto);
    return 'You sent a GET request to users endpoint';
  }
}

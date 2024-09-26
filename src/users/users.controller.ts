import { Controller, Get, Param } from '@nestjs/common';
import { GetUsersDto } from './dtos/get-users.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(@Param() getUsersDto: GetUsersDto) {
    console.log(getUsersDto);
    return 'You sent a GET request to users endpoint';
  }
}

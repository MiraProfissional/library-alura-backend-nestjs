import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GetUsersDto } from './dtos/get-users.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(@Param() getUsersDto: GetUsersDto) {
    console.log(getUsersDto);
    return 'You sent a GET request to users endpoint';
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You sent a POST request to users endpoint';
  }

  @Patch()
  public updateUser(@Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return 'You sent a PATCH request to users endpoint';
  }

  @Delete('/:id')
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return 'You sent a DELETE request to users endpoint';
  }
}

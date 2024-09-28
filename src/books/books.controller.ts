import { Controller, Get, Param } from '@nestjs/common';
import { GetUsersDto } from 'src/users/dtos/get-users.dto';

@Controller('books')
export class BooksController {
  @Get('/:id?')
  public getBooks(@Param() getBooksDto: GetUsersDto) {
    console.log(getBooksDto);
    return 'You sent a GET request to books endpoint';
  }
}

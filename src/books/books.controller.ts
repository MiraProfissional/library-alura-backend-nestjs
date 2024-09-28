import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetUsersDto } from 'src/users/dtos/get-users.dto';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  @Get('/:id?')
  public getBooks(@Param() getBooksDto: GetUsersDto) {
    console.log(getBooksDto);
    return 'You sent a GET request to books endpoint';
  }

  @Post()
  public createBooks(@Body() createBookDto: CreateBookDto) {
    console.log(createBookDto);
    return 'You sent a POST request to books endpoint';
  }
}

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
import { GetUsersDto } from 'src/users/dtos/get-users.dto';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

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

  @Patch()
  public updateBooks(@Body() updateBookDto: UpdateBookDto) {
    console.log(updateBookDto);
    return 'You sent a PATCH request to books endpoint';
  }

  @Delete('/:id')
  public removeBook(@Param('id', ParseIntPipe) idBook: number) {
    console.log(idBook);
    return 'You sent a PATCH request to books endpoint';
  }
}

import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetUsersDto } from '../users/dtos/get-users.dto';

@Controller('favorites')
export class FavoritesController {
  @Get('/:id?')
  public getFavorites(@Param() getFavoritesDto: GetUsersDto) {
    console.log(getFavoritesDto);
    return 'You sent a GET request to favorites endpoint';
  }

  @Post('/:idBook/:idUser')
  public addingFavorite(
    @Param('idBook', ParseIntPipe) idBook: number,
    @Param('idUser', ParseIntPipe) idUser: number,
  ) {
    console.log(idBook);
    console.log(idUser);
    return 'You sent a POST request to favorites endpoint';
  }

  @Delete('/:id')
  public removeFavorite(@Param('id', ParseIntPipe) idBook: number) {
    console.log(idBook);
    return 'You sent a DELETE request to favorites endpoint';
  }
}

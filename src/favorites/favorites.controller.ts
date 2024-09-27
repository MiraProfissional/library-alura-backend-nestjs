import { Controller, Get, Param } from '@nestjs/common';
import { GetUsersDto } from '../users/dtos/get-users.dto';

@Controller('favorites')
export class FavoritesController {
  @Get('/:id?')
  public getFavorites(@Param() getFavoritesDto: GetUsersDto) {
    console.log(getFavoritesDto);
    return 'You sent a GET request to favorites endpoint';
  }
}

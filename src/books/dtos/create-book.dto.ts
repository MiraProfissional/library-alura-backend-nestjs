import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Genre } from './genre-books.enum';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  author: string;

  @IsNumber()
  @IsNotEmpty()
  publication_year: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Genre, {
    message:
      'Invalid genre. Choose one of the options: Linguagem de Programação, Liderança, Algoritmos, Programação Orientada a Objetos, Lógica de Programação',
  })
  genre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(100, { message: 'Minimum 100 characters' })
  @MaxLength(300, { message: 'Maximum 300 characters' })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  image_path?: string = '/images/default-image.jpg';
}

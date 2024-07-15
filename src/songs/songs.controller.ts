import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/create-songs.dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Post()
  @HttpCode(201)
  createSong(@Body() createSongDTO: CreateSongsDTO) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (error) {
      throw new HttpException(
        'unable to fetch the data from DB',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne() {
    return 'fetching songs by id';
  }

  @Put(':id')
  updateOne() {
    return 'update the songs by id';
  }

  @Delete(':id')
  deleteOne() {
    return 'delete songs by id';
  }
}

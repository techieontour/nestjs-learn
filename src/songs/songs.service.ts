import { Injectable } from '@nestjs/common';
import { CreateSongsDTO } from './dto/create-songs.dto';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song: CreateSongsDTO) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // throw new Error('Fetch database in DB error');
    return this.songs;
  }
}

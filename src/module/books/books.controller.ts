import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return this.booksService.create(data);
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }
}

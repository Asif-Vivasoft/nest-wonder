import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  findAll() {
    return 'Find all books';
  }

  @Get(':id')
  findById() {
    return 'Find one book by id';
  }

  @Put(':id')
  update() {
    return 'Update book by id';
  }

  @Post()
  create() {
    return 'Create Book';
  }

  @Delete(':id')
  delete() {
    return 'Delete book by id';
  }
}

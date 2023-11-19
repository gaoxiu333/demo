import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsCOntroller {
  @Get()
  findAll(@Req() request: Request): string {
    console.log('request', request);
    return 'all cats';
  }

  @Post()
  create(): string {
    return 'create cats';
  }
}


import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { BukuService } from './buku.service.js';
import type { Buku } from './interfaces/buku.interface.js';

@Controller('buku')
export class BukuController {
  constructor(
    private readonly bukuService: BukuService,
  ) {}

  @Get()
  findAll(): Buku[] {
    return this.bukuService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Buku {
    return this.bukuService.findOne(id);
  }

  @Post()
  create(
    @Body() body: Omit<Buku, 'id'>,
  ): Buku {
    return this.bukuService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Omit<Buku, 'id'>,
  ): Buku {
    return this.bukuService.update(id, body);
  }

  @Patch(':id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Omit<Buku, 'id'>>,
  ): Buku {
    return this.bukuService.patch(id, body);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ): Buku {
    return this.bukuService.remove(id);
  }
}

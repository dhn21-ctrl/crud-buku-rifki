
import { Module } from '@nestjs/common';
import { BukuModule } from './buku/buku.module.js';

@Module({
  imports: [BukuModule],
})
export class AppModule {}

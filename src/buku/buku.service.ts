
import { Injectable, NotFoundException } from '@nestjs/common';

import type { Buku } from './interfaces/buku.interface.js';

@Injectable()
export class BukuService {
  private buku: Buku[] = [
    {
      id: 1,
      nama: 'Promise',
      penerbit: ' Dwitasari (bersama Tisa TS)',
      tahunTerbit: 2016,
    },
    {
      id: 2,
      nama: 'Bumi',
      penerbit: 'Gramedia',
      tahunTerbit: 2014,
    },
  ];

  // Menampilkan semua buku
  findAll(): Buku[] {
    return this.buku;
  }

  // Menampilkan satu buku
  findOne(id: number): Buku {
    const data = this.buku.find(
      (item) => item.id === id,
    );

    if (!data) {
      throw new NotFoundException(
        'Buku tidak ditemukan',
      );
    }

    return data;
  }

  // Menambahkan buku
  create(data: Omit<Buku, 'id'>): Buku {
    const nextId = this.buku.length
      ? Math.max(
          ...this.buku.map((item) => item.id),
        ) + 1
      : 1;

    const bukuBaru: Buku = {
      id: nextId,
      ...data,
    };

    this.buku.push(bukuBaru);

    return bukuBaru;
  }

  // Mengganti semua data buku
  update(
    id: number,
    data: Omit<Buku, 'id'>,
  ): Buku {
    const buku = this.findOne(id);

    buku.nama = data.nama;
    buku.penerbit = data.penerbit;
    buku.tahunTerbit = data.tahunTerbit;

    return buku;
  }

  // Mengubah sebagian data buku
  patch(
    id: number,
    data: Partial<Omit<Buku, 'id'>>,
  ): Buku {
    const buku = this.findOne(id);

    Object.assign(buku, data);

    return buku;
  }

  // Menghapus buku
  remove(id: number): Buku {
    const index = this.buku.findIndex(
      (item) => item.id === id,
    );

    if (index === -1) {
      throw new NotFoundException(
        'Buku tidak ditemukan',
      );
    }

    const [bukuDihapus] = this.buku.splice(
      index,
      1,
    );

    return bukuDihapus;
  }
}

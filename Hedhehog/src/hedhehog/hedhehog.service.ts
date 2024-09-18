import { Injectable } from '@nestjs/common';
import { Hedhehog } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class HedhehogService {
  constructor(private prisma: PrismaService) {}

  async createHedhehog(data: {
    name: string;
    age: number;
    color: string;
  }): Promise<Hedhehog> {
    return this.prisma.hedhehog.create({ data });
  }

  async getHedhehog(): Promise<Hedhehog[]> {
    return this.prisma.hedhehog.findMany();
  }
}


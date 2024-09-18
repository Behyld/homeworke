import { Controller, Get, Post, Body } from '@nestjs/common';
import { HedhehogService } from './hedhehog.service';
import { Hedhehog } from '@prisma/client';

@Controller('Hedhehog')
export class HedhehogController {
  constructor(private readonly HedhehogService: HedhehogService) {}

  @Post()
  async createParrot(
    @Body() data: { name: string; age: number; color: string; },
    ): Promise<Hedhehog> {
      return this.HedhehogService.createHedhehog(data);
    }

  @Get()
  async getHedhehog(): Promise<Hedhehog[]> {
    return this.HedhehogService.getDHedhehog();
  }
}

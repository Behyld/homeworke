import { Module } from '@nestjs/common';
import { HedhehogController } from './hedhehog.controller';
import { HedhehogService } from './hedhehog.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HedhehogController],
  providers: [HedhehogService],
})
export class HedhehogModule {}

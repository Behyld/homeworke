import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HedhehogModule } from './hedhehog/hedhehog.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [HedhehogModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

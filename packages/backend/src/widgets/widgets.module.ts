import { Module } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WidgetsService],
  controllers: [WidgetsController],
  exports:[WidgetsService]
})
export class WidgetsModule {}

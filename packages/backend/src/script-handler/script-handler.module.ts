import { Module } from '@nestjs/common';
import { ScriptHandlerController } from './script-handler.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ResponseDataModule } from 'src/response-data/response-data.module';

@Module({
  imports: [PrismaModule, ResponseDataModule],
  controllers: [ScriptHandlerController],
  providers: [],
})
export class ScriptHandlerModule {}

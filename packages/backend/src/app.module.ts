import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProjectsModule } from './projects/projects.module';
import { ComponentsModule } from './components/components.module';
import { WidgetsModule } from './widgets/widgets.module';
import { ScriptHandlerModule } from './script-handler/script-handler.module';
import { ResponseDataModule } from './response-data/response-data.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ProjectsModule,
    ComponentsModule,
    WidgetsModule,
    ScriptHandlerModule,
    ResponseDataModule,
  ],
})
export class AppModule {}

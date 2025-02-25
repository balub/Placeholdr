import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import CreateWidgetDTO from './dtos/create-widget.dto';
import { AuthUser } from 'src/types/AuthUser';
import { User } from 'src/decorators/user.decorator';
import { WidgetsService } from './widgets.service';

@Controller({ path: 'Widgets', version: '1' })
export class WidgetsController {
  constructor(private readonly Widgetservice: WidgetsService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createWidget(
    @Body() body: CreateWidgetDTO,
    @User() authUser: AuthUser,
  ) {
    return this.Widgetservice.createWidget(body, authUser.uid);
  }

    @Get(":projectId")
    @UseGuards(JwtAuthGuard)
    async getProjectWidgets(@Param('projectId') projectId: string) {
        return this.Widgetservice.getWidgetsByProject(projectId)
    }

    @Put(':widgetId')
    @UseGuards(JwtAuthGuard)
    async updateWidget(
      @Param('widgetId') widgetId: string,
      @Body() body: CreateWidgetDTO,
      @User() authUser: AuthUser,
    ) {
      return this.Widgetservice.updateWidget(body, widgetId, authUser.uid)
    }
}

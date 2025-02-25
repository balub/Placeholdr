import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateWidgetDTO from './dtos/create-widget.dto';

@Injectable()
export class WidgetsService {
  constructor(private readonly prisma: PrismaService) { }

  async createWidget(data: CreateWidgetDTO, userId: string) {
    return this.prisma.widgets.create({
      data: {
        meta: data.meta,
        projectId: data.projectId,
        createdBy: userId,
      },
    });
  }

  async getWidgetsByProject(projectId: string) {
    return this.prisma.widgets.findMany({
      where: { projectId },
    });
  }

    async updateWidget(data: CreateWidgetDTO, widgetId: string, userId: string) {
        return this.prisma.widgets.update({
          where: { id: widgetId },
          data: {
            meta: data.meta,
            createdBy: userId,
          },
        });
      }
}

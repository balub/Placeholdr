import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WidgetsService } from 'src/widgets/widgets.service';
import { CreateEventDTO } from './dto/create-event.dto';
import { ResponseDataService } from 'src/response-data/response-data.service';

@Controller({ path: 'script-handler', version: '1' })
export class ScriptHandlerController {
  constructor(
    private readonly responseDataService: ResponseDataService,
  ) {}

  @Post('events')
  async getResponseEvents(@Body() data: CreateEventDTO) {
    return this.responseDataService.saveEvent({
      projectId: data.projectId,
      componentId: data.componentId,
      sessionId: data.sessionId,
      data: data.data,
    });
  }
}

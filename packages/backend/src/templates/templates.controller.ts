import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import CreateTemplateDTO from './dtos/create-template.dto';
import { AuthUser } from 'src/types/AuthUser';
import { User } from 'src/decorators/user.decorator';

@Controller({ path: 'templates', version: '1' })
export class TemplatesController {
  constructor(private readonly templateService: TemplatesService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTemplate(
    @Body() body: CreateTemplateDTO,
    @User() authUser: AuthUser,
  ) {
    return this.templateService.createTemplate(body, authUser.uid);
  }

    @Get(":projectId")
    @UseGuards(JwtAuthGuard)
    async getProjectTemplate(@Param('projectId') projectId: string) {
        return this.templateService.getTemplateByProject(projectId)
    }

    @Put(':projectId')
    @UseGuards(JwtAuthGuard)
    async updateTemplate(
      @Param('projectId') projectId: string,
      @Body() body: CreateTemplateDTO,
      @User() authUser: AuthUser,
    ) {
      return this.templateService.updateTemplate(body, projectId, authUser.uid)
    }
}

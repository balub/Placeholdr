import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateTemplateDTO from './dtos/create-project.dto';

@Injectable()
export class TemplatesService {
    constructor(private readonly prisma: PrismaService) { }

    async createTemplate(data: CreateTemplateDTO, userId: string) {
        return this.prisma.template.create({
            data: {
                meta: data.meta,
                projectId: data.projectId,
                createdBy: userId
            }
        })
    }

    async getTemplateByProject(projectId: string) {
        return this.prisma.template.findUnique({
            where: {
                projectId
            }
        })
    }

    async getTemplateForScript(projectId: string) {
        return this.prisma.template.findUnique({
            select: {
                meta: true
            },
            where: {
                projectId
            }
        })
    }
}
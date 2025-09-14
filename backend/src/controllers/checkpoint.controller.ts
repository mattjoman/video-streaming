import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CheckpointService } from '../services/checkpoint.service';
import { MissionConfigDto, MissionDto } from '../dto/mission.dto';

@Controller('checkpoints')
export class CheckpointController {
  constructor(private readonly checkpointService: CheckpointService) {}

  @Get()
  async getCheckpoints(@Query('n') n?: string) {
    const limit = n ? parseInt(n, 10) : 10;
    return await this.checkpointService.getCheckpoints(limit);
  }

  @Post('generate-mission')
  async generateMission(@Body() config: MissionConfigDto): Promise<Partial<MissionDto>> {
    return await this.checkpointService.generateMission(config);
  }
} 
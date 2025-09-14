import { Controller, Post, Get, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MissionService } from '../services/mission.service';
import { MissionDto } from '../dto/mission.dto';

@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Post()
  async saveMission(@Body() missionData: Partial<MissionDto>) {
    try {
      return await this.missionService.saveMission(missionData);
    } catch (error) {
      throw new HttpException('Failed to save mission', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getAllMissions() {
    return await this.missionService.getAllMissions();
  }

  @Get(':id')
  async getMissionById(@Param('id') id: string) {
    const mission = await this.missionService.getMissionById(id);
    if (!mission) {
      throw new HttpException('Mission not found', HttpStatus.NOT_FOUND);
    }
    return mission;
  }
} 
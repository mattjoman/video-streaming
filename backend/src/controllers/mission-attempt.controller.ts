import { Controller, Post, Get, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MissionService } from '../services/mission.service';
import { MissionAttemptService } from '../services/mission-attempt.service';
import { MissionDto } from '../dto/mission.dto';

@Controller('mission-attempt')
export class MissionAttemptController {
  constructor(private readonly missionAttemptService: MissionAttemptService) {}

  @Post('/start')
  async startMissionAttempt(@Body() mission: Partial<MissionDto>) {
    try {
      return await this.missionAttemptService.startMissionAttempt(mission);
    } catch (error) {
      throw new HttpException('Failed to start mission attempt', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
} 

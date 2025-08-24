import { Injectable } from '@nestjs/common';
import { MissionDto } from '../dto/mission.dto';
import { MissionAttemptDto } from '../dto/mission-attempt.dto';
import { AttemptCheckpointDto } from '../dto/checkpoint.dto';

@Injectable()
export class MissionAttemptService {

  async startMissionAttempt(mission: MissionDto): Promise<MissionAttemptDto> {
    try {
      let missionAttempt = new MissionAttemptDto();
      missionAttempt.isCompleted = 0;
      missionAttempt.config = mission.config;
      let checkpoints: AttemptCheckpointDto[] = [];
      for (let checkpoint of mission.checkpoints) {
        let attemptCheckpoint = new AttemptCheckpointDto();
        attemptCheckpoint.isVisited = 0;
        attemptCheckpoint.name = checkpoint.name;
        attemptCheckpoint.location = checkpoint.location;
        attemptCheckpoint.tags = checkpoint.tags;
        checkpoints.push(attemptCheckpoint);
      }
      missionAttempt.checkpoints = checkpoints;
      return Promise.resolve(missionAttempt);
    } catch (error) {
      console.error('Error starting mission attempt:', error);
      throw error;
    }
  }
} 

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Checkpoint, CheckpointDocument } from '../schemas/checkpoint.schema';
import { MissionConfigDto } from '../dto/mission-config.dto';
import { MissionDto } from '../dto/mission.dto';

@Injectable()
export class CheckpointService {
  constructor(
    @InjectModel(Checkpoint.name) private readonly checkpointModel: Model<CheckpointDocument>,
  ) {}

  async getCheckpoints(n: number = 10): Promise<Checkpoint[]> {
    return this.checkpointModel.find().limit(n).exec();
  }

  async generateMission(config: MissionConfigDto): Promise<MissionDto> {
    let query = {};
    
    // Only filter by tags if tags array is not empty
    if (config.tags && config.tags.length > 0) {
      query = { tags: { $in: config.tags } };
    }
    
    // Find checkpoints based on query and limit
    const checkpoints = await this.checkpointModel.find(query).limit(config.n).exec();

    return {
      config,
      checkpoints
    };
  }
} 
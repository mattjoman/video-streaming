import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Checkpoint, CheckpointDocument } from '../schemas/checkpoint.schema';
import { MissionConfigDto, MissionDto } from '../dto/mission.dto';

@Injectable()
export class CheckpointService {
  constructor(
    @InjectModel(Checkpoint.name) private readonly checkpointModel: Model<CheckpointDocument>,
  ) {}

  async getCheckpoints(n: number = 10): Promise<Checkpoint[]> {
    return this.checkpointModel.find().limit(n).exec();
  }

  async generateMission(config: MissionConfigDto): Promise<Partial<MissionDto>> {
    let query: any = {};
    
    // Filter by tags if tags array is not empty
    if (config.tags && config.tags.length > 0) {
      query.tags = { $in: config.tags };
    }
    
    // Add geospatial filter if location and radius are provided
    if (config.location && config.r) {
      const radiusInRadians = config.r / 6371; // Convert km to radians (Earth radius = 6371 km)
      query.location = {
        $geoWithin: {
          $centerSphere: [config.location.coordinates, radiusInRadians]
        }
      };
    }
    
    // Find checkpoints based on query and limit
    const checkpoints = await this.checkpointModel.find(query).limit(config.n).exec();

    return {
      config,
      checkpoints
    };
  }
} 
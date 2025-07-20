import { MissionConfigDto } from './mission-config.dto';
import { Checkpoint } from '../schemas/checkpoint.schema';

export class MissionDto {
  config: MissionConfigDto;
  checkpoints: Checkpoint[];
} 
import { IsObject, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MissionConfigDto } from './mission-config.dto';
import { Checkpoint } from '../schemas/checkpoint.schema';

export class MissionDto {
  @IsObject()
  @ValidateNested()
  @Type(() => MissionConfigDto)
  config: MissionConfigDto;

  @IsArray()
  checkpoints: Checkpoint[];
} 
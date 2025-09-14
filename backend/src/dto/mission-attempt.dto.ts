import { IsObject, IsNumber, IsArray, IsString, Min, Max, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AttemptCheckpointDto } from './checkpoint.dto';
import { MissionConfigDto } from './mission.dto';

export class MissionAttemptDto {
  @IsString()
  _missionId: string;

  @IsNumber()
  @Min(0)
  @Max(1)
  isCompleted: number;

  @IsObject()
  @ValidateNested()
  @Type(() => MissionConfigDto)
  config: MissionConfigDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttemptCheckpointDto)
  checkpoints: AttemptCheckpointDto[];
} 

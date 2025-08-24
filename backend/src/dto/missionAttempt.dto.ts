import { IsObject, IsNumber, IsArray, IsString, Min, Max, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GeoJsonPointDto } from './geo-json.dto';
import { AttemptCheckpointDto } from './checkpoint.dto';

export class MissionAttemptConfigDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @Min(1)
  @Max(50)
  n: number;

  @IsNumber()
  @IsOptional()
  r?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => GeoJsonPointDto)
  location?: GeoJsonPointDto;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  @IsOptional()
  cptSource?: string;
} 

export class MissionAttemptDto {
  @IsObject()
  @ValidateNested()
  @Type(() => MissionAttemptConfigDto)
  config: MissionAttemptConfigDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttemptCheckpointDto)
  checkpoints: AttemptCheckpointDto[];
} 

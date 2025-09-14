import { IsObject, IsNumber, IsArray, IsString, Min, Max, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GeoJsonPointDto } from './geo-json.dto';
import { CheckpointDto } from './checkpoint.dto';

export class MissionConfigDto {
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

export class MissionDto {
  @IsString()
  _id: string;

  @IsObject()
  @ValidateNested()
  @Type(() => MissionConfigDto)
  config: MissionConfigDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CheckpointDto)
  checkpoints: CheckpointDto[];
} 
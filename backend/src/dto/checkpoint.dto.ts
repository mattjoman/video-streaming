import { IsString, IsArray, ValidateNested, IsNumber, Min, Max } from 'class-validator';
import { GeoJsonPointDto } from './geo-json.dto';
import { Type } from 'class-transformer';

export class CheckpointDto {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => GeoJsonPointDto)
  location: GeoJsonPointDto;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}

export class AttemptCheckpointDto {
  @IsString()
  _id: string;

  @IsNumber()
  @Min(0)
  @Max(1)
  isVisited: number;

  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => GeoJsonPointDto)
  location: GeoJsonPointDto;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}

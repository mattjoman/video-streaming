import { IsNumber, IsArray, IsString, Min, Max, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class GeoJsonPointDto {
  @IsString()
  type: 'Point';

  @IsArray()
  @IsNumber({}, { each: true })
  coordinates: [number, number]; // [longitude, latitude]
}

export class MissionConfigDto {
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
import { IsNumber, IsArray, IsString, Min, Max, IsOptional } from 'class-validator';

export class MissionConfigDto {
  @IsNumber()
  @Min(1)
  @Max(50)
  n: number;

  @IsNumber()
  @IsOptional()
  r?: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  location?: number[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  @IsOptional()
  cptSource?: string;
} 
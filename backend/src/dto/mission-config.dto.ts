import { IsNumber, IsArray, IsString, Min, Max } from 'class-validator';

export class MissionConfigDto {
  @IsNumber()
  @Min(1)
  @Max(50)
  n: number;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
} 
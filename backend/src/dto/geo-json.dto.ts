import { IsString, IsArray, IsNumber } from 'class-validator';

export class GeoJsonPointDto {
  @IsString()
  type: 'Point';

  @IsArray()
  @IsNumber({}, { each: true })
  coordinates: [number, number]; // [longitude, latitude]
}


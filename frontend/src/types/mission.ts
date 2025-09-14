import { Checkpoint } from './checkpoint';

export interface MissionConfig {
  name: string;
  n: number;
  r?: number;
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };
  tags: string[];
  cptSource?: string;
}

export interface Mission {
  _id: string;
  config: MissionConfig;
  checkpoints: Checkpoint[];
}

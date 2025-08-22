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
  config: MissionConfig;
  checkpoints: Checkpoint[];
}

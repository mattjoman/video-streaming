import { AttemptCheckpoint } from './checkpoint';

export interface MissionAttemptConfig {
  //missionId: string;
  isCompleted: 1 | 0;
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

export interface MissionAttempt {
  config?: MissionAttemptConfig;
  checkpoints?: AttemptCheckpoint[];
}


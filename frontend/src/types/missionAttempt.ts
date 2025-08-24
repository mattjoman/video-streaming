import { AttemptCheckpoint } from './checkpoint';
import { MissionConfig } from './mission';

export interface MissionAttempt {
  isCompleted: 0 | 1;
  config?: MissionConfig;
  checkpoints?: AttemptCheckpoint[];
}


import { AttemptCheckpoint } from './checkpoint';
import { MissionConfig } from './mission';

export interface MissionAttempt {
  _missionId: string;
  isCompleted: 0 | 1;
  config?: MissionConfig;
  checkpoints?: AttemptCheckpoint[];
}


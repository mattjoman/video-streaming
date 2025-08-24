import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MissionAttempt } from '../../types';

/*
const initialState: MissionAttempt = {
  config: {
    name: '',
    n: 0,
    isCompleted: 0,
    tags: []
  },
  checkpoints: []
};
*/
const initialState: MissionAttempt = {};

const missionAttemptSlice = createSlice({
  name: 'missionAttempt',
  initialState,
  reducers: {
    setMissionAttempt: (state, action: PayloadAction<MissionAttempt>) => {
      return action.payload;
    },
    updateMissionAttempt: (state, action: PayloadAction<Partial<MissionAttempt>>) => {
      return { ...state, ...action.payload };
    },
    visitCheckpoint: (state, action: PayloadAction<{ idx: number }>) => {
      const { idx } = action.payload;
      if (state.checkpoints && state.checkpoints[idx]) {
        state.checkpoints[idx].isVisited = 1;
      }
    },
    resetMissionAttempt: () => initialState,
  }
});

export const { setMissionAttempt, updateMissionAttempt, visitCheckpoint, resetMissionAttempt } = missionAttemptSlice.actions;
export default missionAttemptSlice.reducer;

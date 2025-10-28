import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MissionAttempt } from '../../types';

const getInitialState = (): Partial<MissionAttempt> => {
  try {
    const saved = localStorage.getItem('missionAttempt');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

const initialState: Partial<MissionAttempt> = getInitialState();

const missionAttemptSlice = createSlice({
  name: 'missionAttempt',
  initialState,
  reducers: {
    setMissionAttempt: (state, action: PayloadAction<MissionAttempt>) => {
      localStorage.setItem('missionAttempt', JSON.stringify(action.payload));
      return action.payload;
    },
    updateMissionAttempt: (state, action: PayloadAction<Partial<MissionAttempt>>) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem('missionAttempt', JSON.stringify(newState));
      return newState;
    },
    visitCheckpoint: (state, action: PayloadAction<{ idx: number }>) => {
      const { idx } = action.payload;
      if (state.checkpoints && state.checkpoints[idx]) {
        state.checkpoints[idx].isVisited = 1;
        localStorage.setItem('missionAttempt', JSON.stringify(state));
      }
    },
    resetMissionAttempt: () => {
      localStorage.removeItem('missionAttempt');
      return {};
    },
  }
});

export const { setMissionAttempt, updateMissionAttempt, visitCheckpoint, resetMissionAttempt } = missionAttemptSlice.actions;
export default missionAttemptSlice.reducer;

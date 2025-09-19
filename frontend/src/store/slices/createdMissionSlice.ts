import { createSlice } from '@reduxjs/toolkit';
import { Mission } from '../../types';

const initialState: Partial<Mission> = {
  checkpoints: []
};

const createdMissionSlice = createSlice({
  name: 'createdMission',
  initialState,
  reducers: {
    setCreatedMission: (state, action) => {
      return action.payload;
    },
    updateCreatedMission: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCreatedMissionCheckpoints: (state) => {
      return { ...state, checkpoints: [] };
    },
    addCreatedMissionCheckpoint: (state, action) => {
      return { ...state, checkpoints: [...(state.checkpoints || []), action.payload] };
    },
    removeCreatedMissionCheckpoint: (state, action) => {
      return { ...state, checkpoints: (state.checkpoints || []).filter((_, idx) => idx !== action.payload) };
    },
    resetCreatedMission: () => initialState,
  }
});

export const {
  setCreatedMission,
  updateCreatedMission,
  resetCreatedMission,
  resetCreatedMissionCheckpoints,
  addCreatedMissionCheckpoint,
  removeCreatedMissionCheckpoint,
} = createdMissionSlice.actions;
export default createdMissionSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { Mission } from '../../types';

const initialState: Partial<Mission> = {
  _id: '',
  config: {
    name: '',
    n: 0,
    tags: [],
    r: 0,
    cptSource: '',
    location: { type: 'Point', coordinates: [0, 0] }
  },
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
    resetCreatedMissionCheckpoints: (state, action) => {
      return { ...state, config: { ...state.config, cptSource: action.payload }, checkpoints: [] };
    },
    addCreatedMissionCheckpoint: (state, action) => {
      const newCheckpoint = {
        _id: '',
        name: 'Manually added checkpoint',
        location: action.payload,
        tags: [],
      };
      return { ...state, checkpoints: [...(state.checkpoints || []), newCheckpoint] };
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

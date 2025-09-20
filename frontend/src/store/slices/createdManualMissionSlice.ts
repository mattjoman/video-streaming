import { createSlice } from '@reduxjs/toolkit';
import { Mission } from '../../types';

const initialState: Partial<Mission> = {
  //_id: '',
  config: {
    name: '',
    n: 0,
    tags: [],
    r: 0,
    cptSource: 'manual',
    location: { type: 'Point', coordinates: [0, 0] }
  },
  checkpoints: []
};

const createdManualMissionSlice = createSlice({
  name: 'createdManualMission',
  initialState,
  reducers: {
    setCreatedManualMission: (state, action) => {
      return action.payload;
    },
    updateCreatedManualMission: (state, action) => {
      return { ...state, ...action.payload };
    },
    addCreatedManualMissionCheckpoint: (state, action) => {
      const newCheckpoint = {
        _id: '',
        name: 'Manually added checkpoint',
        location: action.payload,
        tags: [],
      };
      return { ...state, checkpoints: [...(state.checkpoints || []), newCheckpoint] };
    },
    removeCreatedManualMissionCheckpoint: (state, action) => {
      return { ...state, checkpoints: (state.checkpoints || []).filter((_, idx) => idx !== action.payload) };
    },
  }
});

export const {
  setCreatedManualMission,
  updateCreatedManualMission,
  addCreatedManualMissionCheckpoint,
  removeCreatedManualMissionCheckpoint,
} = createdManualMissionSlice.actions;
export default createdManualMissionSlice.reducer;


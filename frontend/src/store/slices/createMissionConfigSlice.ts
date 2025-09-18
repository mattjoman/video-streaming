import { createSlice } from '@reduxjs/toolkit';
import { MissionConfig } from '../../types';

const initialState: MissionConfig = {
  name: '',
  n: 3,
  r: 10,
  location: {
    type: 'Point',
    coordinates: [-0.086, 51.518]
  },
  tags: [],
  cptSource: 'database'
};

const createMissionConfigSlice = createSlice({
  name: 'createMissionConfig',
  initialState,
  reducers: {
    updateCreateMissionConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCreateMissionConfig: () => initialState,
  },
});

export const { updateCreateMissionConfig, resetCreateMissionConfig } = createMissionConfigSlice.actions;
export default createMissionConfigSlice.reducer;

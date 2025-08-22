import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  n: 5,
  r: 10,
  location: {
    type: 'Point',
    coordinates: [-0.086, 51.518]
  },
  tags: [],
  cptSource: 'database'
};

const missionConfigSlice = createSlice({
  name: 'missionConfig',
  initialState,
  reducers: {
    updateMissionConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetMissionConfig: () => initialState,
  },
});

export const { updateMissionConfig, resetMissionConfig } = missionConfigSlice.actions;
export default missionConfigSlice.reducer;

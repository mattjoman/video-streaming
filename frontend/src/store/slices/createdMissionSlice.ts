import { createSlice } from '@reduxjs/toolkit';
import { Mission } from '../../types';

const initialState: Partial<Mission> = {};

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
    resetCreatedMission: () => initialState,
  }
});

export const { setCreatedMission, updateCreatedMission, resetCreatedMission } = createdMissionSlice.actions;
export default createdMissionSlice.reducer;

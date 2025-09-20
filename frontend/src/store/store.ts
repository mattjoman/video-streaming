import { configureStore } from '@reduxjs/toolkit';
import createMissionConfigReducer from './slices/createMissionConfigSlice';
import createdMissionReducer from './slices/createdMissionSlice';
import createdManualMissionReducer from './slices/createdManualMissionSlice';
import missionAttemptReducer from './slices/missionAttemptSlice';
import pageHistoryReducer from './slices/pageHistorySlice';
import mapReducer from './slices/mapSlice';

export const store = configureStore({
  reducer: {
    createMissionConfig: createMissionConfigReducer,
    createdMission: createdMissionReducer,
    createdManualMission: createdManualMissionReducer,
    missionAttempt: missionAttemptReducer,
    pageHistory: pageHistoryReducer,
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

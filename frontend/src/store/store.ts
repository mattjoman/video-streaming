import { configureStore } from '@reduxjs/toolkit';
import createMissionConfigReducer from './slices/createMissionConfigSlice';
import createdMissionReducer from './slices/createdMissionSlice';
import missionAttemptReducer from './slices/missionAttemptSlice';
import pageHistoryReducer from './slices/pageHistorySlice';

export const store = configureStore({
  reducer: {
    createMissionConfig: createMissionConfigReducer,
    createdMission: createdMissionReducer,
    missionAttempt: missionAttemptReducer,
    pageHistory: pageHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

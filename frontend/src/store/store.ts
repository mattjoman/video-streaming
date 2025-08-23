import { configureStore } from '@reduxjs/toolkit';
import missionConfigReducer from './slices/missionConfigSlice';
import pageHistoryReducer from './slices/pageHistorySlice';

export const store = configureStore({
  reducer: {
    missionConfig: missionConfigReducer,
    pageHistory: pageHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

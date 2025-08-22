import { configureStore } from '@reduxjs/toolkit';
import missionConfigReducer from './slices/missionConfigSlice';

export const store = configureStore({
  reducer: {
    missionConfig: missionConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

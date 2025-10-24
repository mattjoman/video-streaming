import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageHistoryState {
  history: string[];
}

const initialState: PageHistoryState = {
  history: ['create-mission']
};

const pageHistorySlice = createSlice({
  name: 'pageHistory',
  initialState,
  reducers: {
    pushPage: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    popPage: (state) => {
      if (state.history.length > 1) {
        state.history.pop();
      }
    },
    clearHistory: (state) => {
      state.history = ['home'];
    }
  }
});

export const { pushPage, popPage, clearHistory } = pageHistorySlice.actions;
export default pageHistorySlice.reducer;

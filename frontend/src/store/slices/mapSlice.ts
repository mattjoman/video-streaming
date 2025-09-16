import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  mapType: '',
  active: false,

  // both types
  activeMarker: null,
  loc: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    mapUpdate: (state, action) => {
      return { ...state, ...action.payload };
    },
  }
});

export const { mapUpdate } = mapSlice.actions;
export default mapSlice.reducer;
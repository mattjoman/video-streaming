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
    mapSetType: (state, action) => {
      state.mapType = action.payload;
    },
    mapSetActive: (state, action) => {
      state.active = action.payload;
    },
    mapSetActiveMarker: (state, action) => {
      state.activeMarker = action.payload;
    },
  }
});

export const { mapSetType, mapSetActive, mapSetActiveMarker } = mapSlice.actions;
export default mapSlice.reducer;
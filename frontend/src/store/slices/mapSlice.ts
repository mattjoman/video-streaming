import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  // general
  mapType: '', // create, attempt, search
  active: false,

  // type: 'create'
  location: null,
  activeMarker: null,
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
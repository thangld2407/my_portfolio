import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.isDarkMode = true;
    },
    setLightMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

export const { setDarkMode, setLightMode } = modeSlice.actions;
export default modeSlice.reducer;

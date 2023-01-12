import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./features/mode";

export const store = configureStore({
  reducer: {
    mode: modeSlice,
  },
});

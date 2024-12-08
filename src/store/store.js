import { configureStore } from "@reduxjs/toolkit";
import counterReduer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReduer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // pure functions
    add(state) {
      state.value += 1;
    },
    remove(state) {
      state.value -= 1;
    },
    incByFive(state, action) {
      state.value += action.payload;
    },
  },
});

// export the actions
export const { add, remove, incByFive } = counterSlice.actions;
// export reducers
export default counterSlice.reducer;

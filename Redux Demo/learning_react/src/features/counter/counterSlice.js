import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (count) => {
      state.count += 1;
    },

    decrement: (count) => {
      state.count -= 1;
    },
  },
});

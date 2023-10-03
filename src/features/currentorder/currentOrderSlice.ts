import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface CurrentOrderState {
  value: SingleOrderType[];
}

// Define the initial state using that type
const initialState: CurrentOrderState = {
  value: [],
};

export const currentOrderSlice = createSlice({
  name: "currentOrder",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (order) => order.pizzaId !== action.payload
      );
    },
  },
});

export const { add } = currentOrderSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default currentOrderSlice.reducer;

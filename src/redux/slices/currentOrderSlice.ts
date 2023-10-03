import { createSlice } from "@reduxjs/toolkit";
import { calcTotal } from "./utils";
import { RootState } from "../store";

interface CurrentOrderState {
  items: SingleOrderType[];
  total: number;
}

const initialState: CurrentOrderState = {
  items: [],
  total: 0,
};

export const currentOrderSlice = createSlice({
  name: "currentOrder",
  initialState,
  reducers: {
    update: (state, action) => {
      console.log("update");
      const { id, count } = action.payload;

      if (count < 0) return;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.count = count;
      } else {
        state.items.push(action.payload);
      }

      state.total = calcTotal(state.items);
    },
    reset: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { update, reset } = currentOrderSlice.actions;
export const selectcurrentOrder = (state: RootState) => state.currentOrder;
export default currentOrderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { calcTotal, removeItemById } from "./utils";

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
      const { id, count } = action.payload;

      if (count < 0) return;

      if (count === 0) {
        state.items = removeItemById(id, state.items);
        state.total = calcTotal(state.items);
        return;
      }

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
    setItems: (state, action) => {
      state.items = action.payload;
      state.total = calcTotal(state.items);
    },
  },
});

export const { update, reset, setItems } = currentOrderSlice.actions;
export default currentOrderSlice.reducer;

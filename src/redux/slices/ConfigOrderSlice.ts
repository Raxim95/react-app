import { createSlice } from "@reduxjs/toolkit";

interface ConfigOrderState {
  items: SingleOrderType[];
  current: string;
}

const initialState: ConfigOrderState = {
  items: [],
  current: "",
};

export const configOrderSlice = createSlice({
  name: "configOrder",
  initialState,
  reducers: {
    update: (state, action) => {
      state.current = action.payload.token;
    },
    reset: (state) => {
      state.items = [];
      state.current = "";
    },
    load: (state, action) => {
      const { token } = action.payload;
      state.current = token;
    },
  },
});

export const { reset, update, load } = configOrderSlice.actions;
export default configOrderSlice.reducer;

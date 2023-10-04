import { createSlice } from "@reduxjs/toolkit";
import { getRandomToken } from "./utils";

interface ConfigOrderState {
  token: string;
}

const initialState: ConfigOrderState = {
  token: "",
};

export const configOrderSlice = createSlice({
  name: "configOrder",
  initialState,
  reducers: {
    update: (state, action) => {
      state.token = action.payload.token;
    },
    save: (state, action) => {
      const token = getRandomToken();
      const items = action.payload;

      localStorage.setItem(token, JSON.stringify(items));
      state.token = token;

      console.log("TOKEN: ", token);
      console.log("ITEMS: ", items);
    },
    load: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
    reset: (state) => {
      state.token = "";
    },
  },
});

export const { reset, update, save, load } = configOrderSlice.actions;
export default configOrderSlice.reducer;

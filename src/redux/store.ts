import { configureStore } from "@reduxjs/toolkit";
import currentOrderSliceReducer from "./slices/currentOrderSlice";

const store = configureStore({
  reducer: {
    currentOrder: currentOrderSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

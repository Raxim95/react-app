import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import currentOrderSliceReducer from "../features/currentorder/currentOrderSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentOrder: currentOrderSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

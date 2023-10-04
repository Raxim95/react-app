import { configureStore } from "@reduxjs/toolkit";
import currentOrderSliceReducer from "./slices/currentOrderSlice";
import ConfigOrderReducer from "./slices/ConfigOrderSlice";

const store = configureStore({
  reducer: {
    currentOrder: currentOrderSliceReducer,
    configOrder: ConfigOrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

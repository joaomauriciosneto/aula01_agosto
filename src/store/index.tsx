import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./features/rootReducer";

export const store = configureStore({
  reducer: combineReducers,
});

export type AppDispatch = typeof store.dispatch;

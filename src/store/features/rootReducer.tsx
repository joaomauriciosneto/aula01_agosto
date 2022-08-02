import { combineReducers } from "@reduxjs/toolkit";
import pokemon from "./pokemonSlice";
const reducers = combineReducers({
  pokemon,
});

export default reducers;
export type State = ReturnType<typeof reducers>;

import { combineReducers } from "redux";
import { textReducer } from "./textReducer";

export const rootReducer = combineReducers({
  text: textReducer,
});


export type RootState = ReturnType<typeof rootReducer>

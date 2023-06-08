import { combineReducers } from "redux";
import { textReducer } from "./textReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
  text: textReducer,
  theme: themeReducer,
});


export type RootState = ReturnType<typeof rootReducer>

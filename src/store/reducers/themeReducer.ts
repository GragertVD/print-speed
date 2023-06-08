import { Theme, ThemeAction, ThemeActionTypes } from "../../types/main"

const initState: Theme = "light"

export const themeReducer = (state: Theme = initState, action: ThemeAction): Theme => {

  if (action.type === ThemeActionTypes.SET_THEME)
    return action.payload;
  else
    return state;
}

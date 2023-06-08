// export enum Theme{
//   light = "LIGHT",
//   dark = "DARK",
// }
export type Theme =  "light" | "dark"

export enum ThemeActionTypes {
  SET_THEME = "SET_THEME",
}

export interface ThemeAction {
  type: ThemeActionTypes.SET_THEME;
  payload: Theme;
}
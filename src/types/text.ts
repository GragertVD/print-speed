
export enum TextActionTypes {
  FETCH_TEXT = "FETCH_TEXT",
  FETCH_TEXT_SUCCESS = "FETCH_TEXT_SUCCESS",
  FETCH_TEXT_ERROR = "FETCH_TEXT_ERROR",
  MOUVE_CURSOR = "MOUVE_CURSOR",
  KEY_MISS = "KEY_MISS",
  KEY_SUCCESS = "KEY_SUCCESS",
  SET_LANGUAGE = "SET_LANGUAGE",
}

interface FetchTextAction {
  type: TextActionTypes.FETCH_TEXT;
}

interface FetchSuccessTextAction {
  type: TextActionTypes.FETCH_TEXT_SUCCESS;
  payload: string;
}

interface FetchErrorTextAction {
  type: TextActionTypes.FETCH_TEXT_ERROR;
  payload: string;
}

interface MouveCursorTextAction {
  type: TextActionTypes.MOUVE_CURSOR;
}

interface KeyMissTextAction {
  type: TextActionTypes.KEY_MISS;
}

interface KeySuccessTextAction {
  type: TextActionTypes.KEY_SUCCESS;
}

interface SetLanguageTextAction {
  type: TextActionTypes.SET_LANGUAGE;
  payload: Language;
}

export type TextAction = FetchTextAction | FetchSuccessTextAction | FetchErrorTextAction | MouveCursorTextAction | KeyMissTextAction | KeySuccessTextAction | SetLanguageTextAction;

export enum Language {
  EN = "EN",
  RU = "RU",
}

export interface TextState {
  text: string,
  currentChar: string,
  currentCharIndex: number,
  loading: boolean,
  keyMiss: boolean,
  countMiss: number,
  error: string | null,
  lang: Language,
}
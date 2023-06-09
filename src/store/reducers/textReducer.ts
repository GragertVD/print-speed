import { Language, TextAction, TextActionTypes, TextState } from "../../types/text";


const initState: TextState = {
  text: "",
  currentChar: "",
  currentCharIndex: 0,
  loading: false,
  keyMiss: false,
  countMiss: 0,
  error: null,
  lang: Language.RU,
}

export const textReducer = (state: TextState = initState, action: TextAction): TextState => {
  let tempState = { ...state };
  tempState.error = null;
  switch (action.type) {
    case TextActionTypes.FETCH_TEXT:
      // tempState = initState;
      tempState.countMiss = 0;
      tempState.loading = true;
      return tempState;

    case TextActionTypes.FETCH_TEXT_SUCCESS:
      tempState.loading = false;
      tempState.text = action.payload;
      tempState.currentCharIndex = 0;
      tempState.countMiss = 0;
      tempState.keyMiss = false;
      tempState.currentChar = tempState.text[0]; 
      return tempState;

    case TextActionTypes.FETCH_TEXT_ERROR:
      tempState.loading = false;
      tempState.error = action.payload;
      return tempState;

    case TextActionTypes.MOUVE_CURSOR:
      tempState.keyMiss = false;
      tempState.currentCharIndex++;
      tempState.currentChar = tempState.text[tempState.currentCharIndex]; 

      return tempState;

    case TextActionTypes.SET_LANGUAGE:
      tempState.lang = action.payload;
      console.log(tempState.lang);
    
      return tempState;

    case TextActionTypes.KEY_MISS:
      if (!tempState.keyMiss){
        tempState.countMiss++;
        tempState.keyMiss = true;
  
        return tempState;
      }
      return state;

    case TextActionTypes.KEY_SUCCESS:
      tempState.keyMiss = false;

      return tempState;
      
    default:
      return state;
  }
}

export const setLanguageAction = (payload: Language) => ({ type: TextActionTypes.SET_LANGUAGE , payload})

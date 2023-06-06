import { TextAction, TextActionTypes, TextState } from "../../types/text";


const initState: TextState = {
  text: "",
  currentChar: "",
  currentCharIndex: 0,
  loading: false,
  keyMiss: false,
  error: null,
}

export const textReducer = (state: TextState = initState, action: TextAction): TextState => {
  let tempState = { ...state };
  tempState.error = null;
  switch (action.type) {
    case TextActionTypes.FETCH_TEXT:
      tempState.loading = true;
      return tempState;

    case TextActionTypes.FETCH_TEXT_SUCCESS:
      tempState.loading = false;
      tempState.text = action.payload;
      tempState.currentCharIndex = 0;
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

    case TextActionTypes.KEY_MISS:
      tempState.keyMiss = true;

      return tempState;

    case TextActionTypes.KEY_SUCCESS:
      tempState.keyMiss = false;

      return tempState;
      
    default:
      return state;
  }
}

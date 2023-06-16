import { Dispatch } from "react"
import { Language, TextAction, TextActionTypes } from '../../types/text';
import axios from "axios";
import { useDispatch } from 'react-redux';


export const fetchText = (lang: Language) => {
  // if (lang === Language.EN)
  let url = 'https://baconipsum.com/api/?type=meat-and-filler';
  switch (lang) {
    case Language.EN:
      url = 'https://baconipsum.com/api/?type=meat-and-filler';
      break;
    case Language.RU:
      url = 'https://fish-text.ru/get?format=json&number=3';
      break;
  
    default:
      break;
  }

  return async (dispatch: Dispatch<TextAction>) => {
    dispatch({ type: TextActionTypes.FETCH_TEXT });
    // setTimeout(() => {
    axios.get(url)
      .then(
        (res) => {
          switch (lang) {
            case Language.EN:
              dispatch({ type: TextActionTypes.FETCH_TEXT_SUCCESS, payload: res.data[0].replaceAll("  ", " ") });
              break;
            case Language.RU:
              dispatch({ type: TextActionTypes.FETCH_TEXT_SUCCESS, payload: res.data.text.replaceAll("  ", " ") });
              break;
          }
        },
        (err) => {
          dispatch({
            type: TextActionTypes.FETCH_TEXT_ERROR,
            payload: err.name
          });
        }
      )
    // }, 1000);
  }
}

export const useSetLanguage = () => {
  const dispatch = useDispatch();
  return (lang: Language) => dispatch({ type: TextActionTypes.SET_LANGUAGE, payload: lang });
}
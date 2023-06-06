import { Dispatch } from "react"
import { TextAction, TextActionTypes } from '../../types/text';
import axios from "axios";


export const fetchText = () => {
  return async (dispatch: Dispatch<TextAction>) => {
    dispatch({ type: TextActionTypes.FETCH_TEXT });
    // setTimeout(() => {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler')
      .then(
        (res) => {
          dispatch({ type: TextActionTypes.FETCH_TEXT_SUCCESS, payload: res.data[0] });
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
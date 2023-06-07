import { CurrentChar, SuccesChar, TextContainer } from "./style";
import { useEffect, useRef } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchText } from '../../store/action-creators/text';
import { TextActionTypes } from '../../types/text';

export function Text() {

  const state = useTypedSelector(state => state.text);
  const dispatch = useDispatch();

  const stateActual = useRef(state);
  stateActual.current = state;

  const keydownValidate = (e: KeyboardEvent) => {
    if (e.key.length === 1)
      if (e.key === stateActual.current.currentChar) {
        dispatch({ type: TextActionTypes.MOUVE_CURSOR });
      }
      else
        dispatch({ type: TextActionTypes.KEY_MISS });
  }

  useEffect(() => {
    fetchText()(dispatch);

    document.addEventListener('keydown', keydownValidate);

    return (() => {
      console.log(stateActual);

      document.removeEventListener('keydown', keydownValidate)
    })
  }, []);


  if (state.loading)
    return (<h1>Загрузка текста</h1>)
  if (state.error)
    return (<h1>Ошибка при загрузки текста</h1>)

  const textArr = state.text.split('');

  return (
    <TextContainer>
      {
        textArr.map((element, index) => {
          if (index === state.currentCharIndex)
            return <CurrentChar key={index} keyMiss={state.keyMiss}>{element}</CurrentChar>
          if (index < state.currentCharIndex)
            return <SuccesChar key={index}>{element}</SuccesChar>
          else
            return <span key={index}>{element}</span>
        })
      }
    </TextContainer>
  );
};

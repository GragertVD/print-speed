import { CurrentChar, SuccesChar, TextContainer } from "./style";
import { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchText } from '../../store/action-creators/text';
import { TextActionTypes } from '../../types/text';
import { FinishMessage } from "../FinishMessage";

export function Text() {
  const [openFinishMessage, setOpenFinishMessage] = useState(false);

  const state = useTypedSelector(state => state.text);
  const dispatch = useDispatch();

  const stateActual = useRef(state);
  stateActual.current = state;

  const keydownValidate = (e: KeyboardEvent) => {
    if (e.key.length === 1)
      if (e.key === stateActual.current.currentChar) {
        dispatch({ type: TextActionTypes.MOUVE_CURSOR });
        
        if (!stateActual.current.loading && stateActual.current.currentCharIndex === stateActual.current.text.length - 1) {
          setOpenFinishMessage(true);
        }
      }
      else
        dispatch({ type: TextActionTypes.KEY_MISS });

  }

  useEffect(() => {
    fetchText(state.lang)(dispatch);

    document.addEventListener('keydown', keydownValidate);

    return (() => {
      document.removeEventListener('keydown', keydownValidate)
    })
  }, []);


  if (state.loading)
    return (<h1>Загрузка текста</h1>)
  if (state.error)
    return (<h1>Ошибка при загрузки текста</h1>)

  const textArr = state.text.split('');

  return (
    <>
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
      {
        openFinishMessage
          ?
          <FinishMessage setOpenMessage={setOpenFinishMessage} />
          :
          <></>
      }
    </>
  );
};

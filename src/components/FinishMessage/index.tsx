import React from 'react'
import { useRef, SetStateAction, Dispatch } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Background, FinishMessageContainer } from './style';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchText } from '../../store/action-creators/text';
import { ButtonReload } from '../CradTest/style';
import { Language } from '../../types/text';


interface IFinishMessage {
  setOpenMessage: Dispatch<SetStateAction<boolean>>;
}


export const FinishMessage: React.FC<IFinishMessage> = ({ setOpenMessage }) => {
  const state = useTypedSelector(state => state.text);
  const dispatch = useDispatch();

  const refTaskContainer = useRef(null);
  useOutsideClick({ element: refTaskContainer, setStateOutsideClick: setOpenMessage })

  return (
    <>
      <Background >
        <FinishMessageContainer ref={refTaskContainer}>
          {
            state.lang === Language.RU
              ?
              <>
                <h3>Поздравляем</h3>
                <p>Вы успешно напечатали {state.text.length} символов</p>
                <p>Допущено {state.countMiss} ошибок</p>
                <ButtonReload onClick={() => {fetchText(state.lang)(dispatch); setOpenMessage(false);}}>Заново</ButtonReload>
              </>

              :
              <>
                <h3>Congratulations</h3>
                <p>You have successfully printed  {state.text.length} characters</p>
                <p>There were  {state.countMiss} errors</p>
                <ButtonReload onClick={() => fetchText(state.lang)(dispatch)}>Reload</ButtonReload>
              </>
          }
        </FinishMessageContainer>
      </Background >
    </>

  )
}

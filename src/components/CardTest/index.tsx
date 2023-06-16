import React from 'react'
import { ButtonReload, CardTestContainer, CardTestInfoContainer } from './style'
import { Text } from '../Text'
import { SpeedInfo } from '../SpeedInfo'
import { AccuracyInfo } from '../AccuracyInfo'
import { useDispatch } from 'react-redux'
import { fetchText } from '../../store/action-creators/text'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AiOutlineReload } from "react-icons/ai";
import { Language } from '../../types/text'

export const CardTest: React.FC = () => {
  const state = useTypedSelector(state => state.text);
  const dispatch = useDispatch();


  return (
    <CardTestContainer>
      <Text />
      <CardTestInfoContainer>
        <SpeedInfo />
        <AccuracyInfo />
        <ButtonReload onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { fetchText(state.lang)(dispatch); event.currentTarget.blur() }}><AiOutlineReload /> {state.lang === Language.RU ? "Заново" : "Reload"}</ButtonReload>
      </CardTestInfoContainer>
    </CardTestContainer>
  )
}

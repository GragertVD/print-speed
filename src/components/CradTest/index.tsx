import React from 'react'
import { ButtonReload, CardTestContainer, CardTestInfoContainer } from './style'
import { Text } from '../Text'
import SpeedInfo from '../SpeedInfo'
import AccuracyInfo from '../AccuracyInfo'
import { useDispatch } from 'react-redux'
import { fetchText } from '../../store/action-creators/text'

function CardTest() {
  const dispatch = useDispatch();
  

  return (
    <CardTestContainer>
      <Text />
      <CardTestInfoContainer>
        <SpeedInfo />
        <AccuracyInfo />
        <ButtonReload onClick={() => fetchText()(dispatch)}>Заново</ButtonReload>
      </CardTestInfoContainer>
    </CardTestContainer>
  )
}

export default CardTest
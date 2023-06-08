import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { GiArcheryTarget } from 'react-icons/gi';
import { Language } from '../../types/text';

export const AccuracyInfo: React.FC = () => {

  const state = useTypedSelector(state => state.text);

  const accuracy = state.currentCharIndex ? (1 - (state.countMiss / state.currentCharIndex)) * 100 : 100;

  return (
    <div>
      
      <h4><GiArcheryTarget />{state.lang === Language.RU ? "Точность" : "Accuracy"}</h4>
      <span>{accuracy.toFixed(1)} %</span>
    </div>
  )
}

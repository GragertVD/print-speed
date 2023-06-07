import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const AccuracyInfo: React.FC = () => {

  const state = useTypedSelector(state => state.text);

  const accuracy = state.currentCharIndex ? (1 - (state.countMiss / state.currentCharIndex)) * 100 : 100;

  return (
    <div>
      <h4>Точность</h4>
      <span>{accuracy.toFixed(1)} %</span>
    </div>
  )
}

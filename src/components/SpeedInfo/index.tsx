import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useRef, useState } from 'react';

export const SpeedInfo: React.FC = () => {
  const state = useTypedSelector(state => state.text);

  const stateActual = useRef(state);
  stateActual.current = state;



  const [speed, setSpeed] = useState(0);


  useEffect(() => {
    let prevCount = 0;
    let prevSpeed = 0;
    let speed = 0;

    const timer = setInterval(() => {

      prevSpeed = speed;
      if ((stateActual.current.currentCharIndex - prevCount) > 0)
        speed = 0.9 * prevSpeed + 60 * (stateActual.current.currentCharIndex - prevCount);
      else
        speed = 0.9 * prevSpeed;

      prevCount = stateActual.current.currentCharIndex;

      setSpeed(speed);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])


  return (
    <div>
      <h4>Скорость</h4>
      <span>{speed.toFixed(0)} зн./мин</span>
    </div>
  )
}

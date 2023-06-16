import React from 'react'
import { ToggleStyl } from './style';
import { useDispatch } from 'react-redux';
import { ThemeActionTypes } from '../../../types/main';

export interface IPropsToggle {
  currentState: string;
  state: string[];
};

const Toggle: React.FC<IPropsToggle> = (props) => {
  const dispatch = useDispatch();

  return (
    <ToggleStyl
      {...props}
      onClick={
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          if (props.currentState === props.state[0])
            dispatch({ type: ThemeActionTypes.SET_THEME, payload: props.state[1] })
          if (props.currentState === props.state[1])
            dispatch({ type: ThemeActionTypes.SET_THEME, payload: props.state[0] })

          event.currentTarget.blur();
        }
      }
    ></ToggleStyl>
  )
}

export default Toggle
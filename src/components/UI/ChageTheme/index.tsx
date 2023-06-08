import React from 'react'
import { ReactComponent as IconDarkTheme } from "../../../img/icon-dark-theme.svg";
import { ReactComponent as IconLightTheme } from "../../../img/icon-light-theme.svg";
import Toggle from '../../UI/Toggle';
import { ChangeThemeContainer } from './style';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { ThemeActionTypes } from '../../../types/main';


export const ChageTheme: React.FC = () => {
  const state = useTypedSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <ChangeThemeContainer>
      <IconLightTheme onClick={() => { state === 'dark' && dispatch({ type: ThemeActionTypes.SET_THEME, payload: "light" }) }} />
      <Toggle state={['light', 'dark']} currentState={state}/>
      <IconDarkTheme onClick={() => { state === 'light' && dispatch({ type: ThemeActionTypes.SET_THEME, payload: "dark" }) }} />
    </ChangeThemeContainer>
  )
}

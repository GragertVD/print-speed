import React from 'react'
import { ButtonLanguageContainer, HeaderContainer } from './style'
import { fetchText, useSetLanguage } from '../../store/action-creators/text'
import { Language } from '../../types/text';
import { useDispatch } from 'react-redux';
import { ChangeTheme } from '../UI/ChangeTheme'


function Header() {
  const dispatch = useDispatch();
  const setLanguage = useSetLanguage();

  return (
    <HeaderContainer>
      <ButtonLanguageContainer>
        <button
          onClick={
            (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              setLanguage(Language.EN);
              fetchText(Language.EN)(dispatch);
              event.currentTarget.blur();
            }}
        >EN</button>
        <button
          onClick={
            (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              setLanguage(Language.RU);
              fetchText(Language.RU)(dispatch);
              event.currentTarget.blur();
            }}
        >RU</button>
      </ButtonLanguageContainer>
      <h1>Typing trainer</h1>
      <ChangeTheme />
    </HeaderContainer>
  )
}

export default Header
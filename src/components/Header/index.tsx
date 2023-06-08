import React from 'react'
import { ButtonLanguageContainer, HeaderContainer } from './style'
import { fetchText, useSetLanguage } from '../../store/action-creators/text'
import { Language } from '../../types/text';
import { useDispatch } from 'react-redux';
import { ChageTheme } from '../UI/ChageTheme'


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
      <ChageTheme />
    </HeaderContainer>
  )
}

export default Header
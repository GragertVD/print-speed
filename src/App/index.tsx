import { ThemeProvider } from "styled-components";
import { CardTest } from "../components/CradTest";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppContainer } from "./style";
import { lightTheme, darkTheme } from '../them';
import { useTypedSelector } from "../hooks/useTypedSelector";

function App() {

  const state = useTypedSelector(state => state.theme);
  console.log(state);

  return (
    <ThemeProvider theme={state === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <Header />
        <CardTest />
        <Footer />
      </AppContainer>
    </ThemeProvider >

  );
}

export default App;

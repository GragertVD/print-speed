import { ThemeProvider } from "styled-components";
import { CardTest } from "../components/CardTest";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppContainer } from "./style";
import { lightTheme, darkTheme } from '../them';
import { useTypedSelector } from "../hooks/useTypedSelector";

function App() {

  const state = useTypedSelector(state => state.theme);

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

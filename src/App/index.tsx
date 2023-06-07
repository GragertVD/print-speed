import { CardTest } from "../components/CradTest";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Text } from "../components/Text";
import { AppContainer } from "./style";

function App() {
  return (
    <AppContainer>
      <Header />
      <CardTest />
      <Footer />
    </AppContainer>
  );
}

export default App;

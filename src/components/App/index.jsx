import { ThemeProvider } from 'styled-components';
import { Container, Header } from './styles';

import Routes from '../../Routes';
import GlobalStyles from '../../styles/globals';
import colors from '../../styles/colors';
import { Countdown } from '../Countdown';


function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Container>
        <Header>
          <h1>O que você vai comprar na Black Friday?</h1>
          <p>Adicione os produtos que você pretende comprar <br />
            e seja notificado quando a black friday chegar!
          </p>
        </Header>
        <Routes />
        <Countdown />
      </Container>
    </ThemeProvider>
  )
}

export default App

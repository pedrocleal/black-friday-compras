import { useState } from 'react'

import { Container } from './styles';

import GlobalStyles from '../../styles/globals';
import Routes from '../../Routes';
import { Countdown } from '../Countdown';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <Container>
        <Routes />
        <Countdown />
      </Container>
    </>
  )
}

export default App

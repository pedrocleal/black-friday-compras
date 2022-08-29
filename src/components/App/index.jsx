import { ThemeProvider } from 'styled-components';

import Routes from '../../Routes';
import GlobalStyles from '../../styles/globals';
import colors from '../../styles/colors';
import { Countdown } from '../Countdown';
import AuthProvider from '../../contexts/AuthContext';

function App() {
  return (
    <ThemeProvider theme={colors}>
      <AuthProvider>
        <GlobalStyles />
          <Routes />
          <Countdown />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

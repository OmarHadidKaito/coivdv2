import React from 'react';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';

import {Router} from './routes/router';
import {NavBar} from './components/NavBar';
import {CostomThemeProvider} from './theme/costom-theme-provider';

function App() {
  return (
    <ThemeProvider>
      <CostomThemeProvider>
        <CSSReset />
        <NavBar />
        <Router />
      </CostomThemeProvider>
    </ThemeProvider>
  );
}

export default App;

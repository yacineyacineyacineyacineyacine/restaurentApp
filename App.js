import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infrastructure/theme/index';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';

const App = ({}) => {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Restaurentscreen />
    </ThemeProvider>
      <StatusBar style="auto" />       
    </>
  );
};



export default App;

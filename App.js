import 'react-native-gesture-handler';
import React, {useState, useEffect}from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';

import { AuthenticationContextProvider } from './src/services/autentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation/';


const App = ({}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
};



export default App;

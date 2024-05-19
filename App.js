import React from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
// import * as Fonts from 'expo-font';
// import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
// import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme/index';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';
// import { isLoaded } from 'expo-font';

const App = ({}) => {
  
// const [oswaldLoaded] = useOswald({Oswald_400Regular});
// const [latoLoaded] = useLato({Lato_400Regular});
 
  // if(!oswaldLoaded || !latoLoaded){
  //     return null;
  // }
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

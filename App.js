import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurents.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigator } from './src/infrastructure/navigation/app.navigator';
const App = ({}) => {
  
   return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigator/>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
    <StatusBar style='auto' />
   
            
    </>
  );
};



export default App;

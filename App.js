import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurents.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { Navigation } from './src/infrastructure/navigation/';


const App = ({}) => {
  
   return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation/>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
       
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
};



export default App;

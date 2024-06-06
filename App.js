import 'react-native-gesture-handler';
import React, {useState, useEffect}from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import auth from '@react-native-firebase/auth'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurents.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { Navigation } from './src/infrastructure/navigation/';


const App = ({}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  
  const onAuthStateChanged = (user) =>{
    
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
    setTimeout(() =>{
      auth()
      .signInWithEmailAndPassword('yacineyacine31212@gmail.com', 'yacine123')
      .then((user) =>{
        setAuthenticated(true)
      }).catch(err => {
        console.log(err);
      })
    }, 2000)

  }, []);

  // if (initializing) return null;
  if (!authenticated) return null;

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

import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../autentication/authentication.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) =>{
    const [favourites, setFavourites] = useState([]);
    const { user } = useContext(AuthenticationContext);

    const saveFavourites = async (value, uid) => {
     
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
          // saving error
          console.log('error storing: ', e);
        }
    };

    const loadFavourites = async (uid) => {
     
        try {
          const value = await AsyncStorage.getItem(`@favourites-${uid}`);
          if (value !== null) {
            setFavourites(JSON.parse(value));
          }
        } catch (e) {
          // error reading value
          console.log('error loading: ', e);
        }
    };

    useEffect(() =>{
      if(user){
        loadFavourites(user.uid);
      }
    }, [user]);
    
    useEffect(() => {
      if(user){
        saveFavourites(favourites, user.uid);
      }
    }, [favourites, user]);

    const add = (restaurant) =>{
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurent) =>{
        const newFavourites = favourites.filter((x) => x.placeId !== restaurent.placeId);
        setFavourites(newFavourites);
    }
    return(
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove
        }}>
            {children}
        </FavouritesContext.Provider>
    )
}
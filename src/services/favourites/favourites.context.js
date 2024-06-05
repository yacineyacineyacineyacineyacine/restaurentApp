import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) =>{
    const [favourites, setFavourites] = useState([]);

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
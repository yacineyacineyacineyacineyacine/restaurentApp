import React, { useState, createContext, useEffect, useMemo, Children } from 'react';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) =>{
   

    return(
        <RestaurantsContext.Provider 
        value={{
            restaurants: [{name: 1}, {name: 2}, {name: 3}],
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}


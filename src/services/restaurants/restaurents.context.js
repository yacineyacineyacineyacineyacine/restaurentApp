import React, { useState, createContext, useEffect, useMemo, Children } from 'react';
import { restaurantsRequests, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) =>{
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const retreiveRestaurants = () =>{
        setIsLoading(true);
        setTimeout(() => { 
            restaurantsRequests()
            .then(restaurantsTransform)
            .then((result) =>{
                setRestaurants(result);
                setIsLoading(false);
             }).catch(error =>{
               setIsLoading(false);
                setError(error)
            })
        }, 2000);
    }
    
    useEffect(() =>{
       retreiveRestaurants();
    }, [])

    return(
        <RestaurantsContext.Provider 
        value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}


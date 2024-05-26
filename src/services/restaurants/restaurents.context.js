import React, { useState, createContext, useEffect, useMemo, Children, useContext } from 'react';
import { restaurantsRequests, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) =>{
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { location } = useContext(LocationContext);
    
    const retreiveRestaurants = (loc) =>{
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => { 
            restaurantsRequests(loc)
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
        
        if(location){
            const locationString = `${location.lat},${location.lng}`
            retreiveRestaurants(locationString);
        }
      
    }, [location])

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


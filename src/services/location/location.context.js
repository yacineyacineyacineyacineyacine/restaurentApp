import React, {useState, createContext, useEffect} from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) =>{
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('san francisco');

  const onSearch = (searchKeyword) =>{
    setIsLoading(true);
    setKeyword(searchKeyword);
   
  }

  useEffect(() =>{
    if(!keyword.length) return
    locationRequest(keyword.toLocaleLowerCase())
    .then(locationTransform)
    .then(result => {
      setLocation(result);
      setIsLoading(false);
    })
    .catch(err =>{
      console.log(err);
      setIsLoading(false);
      setError(err);
    })
  }, [keyword])
 
  return(
    <LocationContext.Provider value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword}}>
      {children}
    </LocationContext.Provider>
   )
}
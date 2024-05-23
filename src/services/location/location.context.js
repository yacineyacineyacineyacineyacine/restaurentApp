import React, {useState, createContext, Children, useEffect} from 'react';
import { locationRequest, locationTransform } from './location.service';

export const locationContext = createContext();

export const locationContextProvider = ({children}) =>{
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

  const onSearch = (searchKeyword) =>{
    setIsLoading(true);
    setKeyword(searchKeyword);
    setTimeout(()=>{
    locationRequest(keyword)
      .then(locationTransform)
      .then(result => {
        setLocation(result);
        setIsLoading(false);
      })
      .catch(err =>{
        setIsLoading(false);
        setError(err);
      })
    }, 2000)
    }
  useEffect(() =>{
    onSearch();
  }, [])
  return(
    <locationContext.Provider value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword}}>
      {children}
    </locationContext.Provider>
   )
}
import React, { createContext, useState } from 'react';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) =>{
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false); 

    const onLogin = (email, password) =>{
      setIsLoading(true); 
      loginRequest(email, password)
      .then(u =>{
        setUser(u);
        setIsLoading(false)
      })
      .catch(e =>{
        setIsLoading(false);
        setError(e);
      })
    }
    return(
        <AuthenticationContext.Provider value={{
            user,
            isLoading,
            error,
            onLogin
        }}>
         {children}
        </AuthenticationContext.Provider>
    )
}
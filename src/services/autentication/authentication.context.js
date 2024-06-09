import React, { createContext, useState } from 'react';
import { loginRequest , registerRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) =>{
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false); 

    const onLogin = (email, password) =>{
      if(email === '' || password === ''){
        setError('Error: email and password should not be empty')
        return;
      }
      setIsLoading(true); 
      loginRequest(email, password)
      .then(u =>{
        setUser(u);
        setIsLoading(false);
      })
      .catch(e =>{
        setIsLoading(false);
        setError(e.toString());
      })
    };

    const onRegister = (email, password, repeatredPassword) =>{
      if(password !== repeatredPassword){
        setError('Error: Passwords do not match');
        return;
      }
      setIsLoading(true);
      registerRequest(email, password)
      .then(u => {
        
        setUser(u);
        setIsLoading(false);
      })
      .catch(e =>{
        console.log(e);
        setIsLoading(false);
        setError(e.toString())
      })
       
 
    };
    return(
        <AuthenticationContext.Provider value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister
        }}>
         {children}
        </AuthenticationContext.Provider>
    )
}
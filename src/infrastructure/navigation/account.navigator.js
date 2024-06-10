import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import LoginScreen from '../../features/account/screens/login.screen';
import AccountScreen from '../../features/account/screens/account.screen';
import RegisterScreen from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();


const createScreenOptions = ({route}) =>{

    return {
     headerShown: false,
     ...TransitionPresets.ModalSlideFromBottomIOS
    }
   }

export const AccountNavigator = () =>{
    return(
        <Stack.Navigator screenOptions = {createScreenOptions}>
            <Stack.Screen name='Main' component={AccountScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
       </Stack.Navigator>
    );
  
}


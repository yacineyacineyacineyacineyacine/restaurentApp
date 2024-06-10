import React, { useEffect } from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';

const SettingsStack = createStackNavigator();

const createScreenOptions = ({route}) =>{

    return {

    //  headerShown: false,
    headerMode: 'screen',
     cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
     ...TransitionPresets.ModalSlideFromBottomIOS
     
     }
   }

export const SettingsNavigator = ({route, navigation}) =>{
    return(
        <SettingsStack.Navigator screenOptions={createScreenOptions}>
            <SettingsStack.Screen 
               options={{
                  header: () => null,
               }} 
                name='Settings'
                component={SettingsScreen}/>
            <SettingsStack.Screen name='Favourites' component={() => null}/>
        </SettingsStack.Navigator>
    )
}   
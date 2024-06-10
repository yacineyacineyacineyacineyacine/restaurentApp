        
import React, {useContext} from 'react';
import { Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons';

import { RestaurentsNavigator } from './restaurents.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurents.context';


const TAB_ICONS = {
    Restaurents: 'restaurant',
    Map: 'map',
    Settings: 'settings'
  }

  const tabBarIcon = (iconName) => ({color, size})  =>{
    return <Ionicicons name={iconName} size={size} color={color}/>
  }
  
  const createScreenOptions = ({route}) =>{
    const iconName = TAB_ICONS[route.name];
   return {
    headerShown: false,
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray'
    }
  }
  
  
  

export const AppNavigator =() => {
   
    const Tab = createBottomTabNavigator();
    return (
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
             <Tab.Navigator screenOptions = {createScreenOptions} >
                <Tab.Screen name='Restaurents' component={RestaurentsNavigator} />
                <Tab.Screen name='Map' component={MapScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
             </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
     
     
    );
};       

       
       
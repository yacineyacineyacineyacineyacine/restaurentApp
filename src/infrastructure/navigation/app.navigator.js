        
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons';

import { RestaurentsNavigator } from './restaurents.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SafeArea } from '../../components/utility/safe.area.component';

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
  
  
  const SettingsScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>

export const AppNavigator =() => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
        <Tab.Navigator
        screenOptions = {createScreenOptions}         
        >
          <Tab.Screen name='Restaurents' component={RestaurentsNavigator} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
};       

       
       
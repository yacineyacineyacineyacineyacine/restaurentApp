import React from 'react';
import { Settings, StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons';

import { theme } from './src/infrastructure/theme/index';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';
import { SafeArea } from './src/components/utility/safe.area.component';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurents.context';
import { LocationContextProvider } from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

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

const MapScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>
const SettingsScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>
const App = ({}) => {
  
   return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
            screenOptions = {createScreenOptions}         
            >
              <Tab.Screen name='Restaurents' component={Restaurentscreen} />
              <Tab.Screen name='Map' component={MapScreen} />
              <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
    <StatusBar style='auto' />
   
            
    </>
  );
};



export default App;

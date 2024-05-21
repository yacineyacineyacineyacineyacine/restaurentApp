import React from 'react';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './src/infrastructure/theme/index';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';
import { SafeArea } from './src/components/utility/safe.area.component';
import Ionicicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();
const MapScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>
const SettingsScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>
const App = ({}) => {
  
   return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({route})=>({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            if(route.name === 'Restaurents'){
               iconName = focused
               ? 'restaurant'
               : 'restaurant-outline';
            }else if(route.name === 'Map') {
              iconName = focused
               ? 'map'
               : 'map-outline';
            }else if(route.name === 'Settings'){
              iconName = focused
               ? 'settings'
               : 'settings-outline';
            }
            return <Ionicicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
         })}
        >
          <Tab.Screen name="Restaurents" component={Restaurentscreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    <StatusBar style="auto" />
   
            
    </>
  );
};



export default App;

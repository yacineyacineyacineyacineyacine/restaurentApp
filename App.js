import React from 'react';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './src/infrastructure/theme/index';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';
import { SafeArea } from './src/components/utility/safe.area.component';


const Tab = createBottomTabNavigator();
const MapScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>
const SettingsScreen = () => <SafeArea><Text>Settings screen</Text></SafeArea>
const App = ({}) => {
  
   return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
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

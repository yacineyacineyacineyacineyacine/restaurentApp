import React from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './src/infrastructure/theme/index';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';
import { MapScreen } from './src/features/map/screens/map.screen';
import { SettingsScreen } from './src/features/settings/screens/settings.screen';
// import { isLoaded } from 'expo-font';

const Tab = createBottomTabNavigator();

const App = ({}) => {
  
// const [oswaldLoaded] = useOswald({Oswald_400Regular});
// const [latoLoaded] = useLato({Lato_400Regular});
 
  // if(!oswaldLoaded || !latoLoaded){
  //     return null;
  // }
  return (
    <>
    <NavigationContainer>
      <ThemeProvider theme={theme}>
          <Tab.Navigator>
            <Tab.Screen name="Restaurents" component={Restaurentscreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
          {/* <Restaurentscreen /> */}
      </ThemeProvider>
        <StatusBar style="auto" />
    </NavigationContainer>
            
    </>
  );
};



export default App;

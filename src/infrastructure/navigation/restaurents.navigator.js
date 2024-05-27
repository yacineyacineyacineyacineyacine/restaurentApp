import React from 'react';
import { Text } from '../../components/typography/text.component';
import { createStackNavigator } from '@react-navigation/stack';
import  Restaurentscreen  from '../../features/restaurants/screens/restaurent.screen'

const RestaurentsStack = createStackNavigator();
const createScreenOptions = ({route}) =>{

   return {
    headerShown: false,
    
    }
  }
export const RestaurentsNavigator = () =>{
    return(
        <RestaurentsStack.Navigator screenOptions = {createScreenOptions}>
            <RestaurentsStack.Screen  name='RestaurentsScreen' component={Restaurentscreen}/>
            <RestaurentsStack.Screen  name='RestaurentsDetail' component={() => <Text>Restaurant Detail</Text>}/>
        </RestaurentsStack.Navigator>
    )
}



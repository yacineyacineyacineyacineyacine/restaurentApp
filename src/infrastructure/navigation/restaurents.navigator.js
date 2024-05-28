import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import  Restaurentscreen  from '../../features/restaurants/screens/restaurent.screen'
import  RestaurentDetail from '../../features/restaurants/screens/restaurent-detail.screen';

const RestaurentsStack = createStackNavigator();
const createScreenOptions = ({route}) =>{

   return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS
    
    }
  }
export const RestaurentsNavigator = () =>{
    return(
        <RestaurentsStack.Navigator screenOptions = {createScreenOptions}>
            <RestaurentsStack.Screen  name='RestaurentsScreen' component={Restaurentscreen}/>
            <RestaurentsStack.Screen  name='RestaurentsDetail' component={RestaurentDetail}/>
        </RestaurentsStack.Navigator>
    )
}



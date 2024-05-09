import React from 'react';
import { StatusBar } from 'react-native';
import Restaurentscreen from './src/features/restaurants/screens/restaurent.screen';

const App = ({}) => {
  
  return (
    <>
      <Restaurentscreen />
      <StatusBar style="auto" />       
    </>
  );
};



export default App;

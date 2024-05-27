import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList , Pressable, StyleSheet} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import RestaurentInfoCard from '../components/restaurent-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utility/safe.area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurents.context';
import { LocationContext } from '../../../services/location/location.context';
import { Search } from '../components/search.component';


 const RestaurentList = styled(FlatList).attrs({
   contentContainerStyle:{
    padding:16,
    backgroundColor: '#ffffff'
   }
 })``;
 
 const LoadingContainer = styled.View`
   position: absolute;
   top: 50%;
   left: 50%
 `;
 const Loading = styled(ActivityIndicator).attrs({
    color: MD2Colors.blue300,
  size: 50
 })`
   margin-left: -25px;
 `


const Restaurentscreen =  ({navigation}) =>  {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
     
  return (
    <>
      <SafeArea>
       <Search/>
        {isLoading && (<LoadingContainer>
           <Loading animating={isLoading} />
        </LoadingContainer>)}
        <RestaurentList
          data={restaurants}
          renderItem={(item) => {
            
            return (
              <Pressable onPress={() => navigation.navigate('RestaurentsDetail')}>
                <Spacer position='bottom' size='large'>
                    <RestaurentInfoCard restaurant={item}/>
                 </Spacer>
              </Pressable>
              
            )}}
          keyExtractor={(item) => item.name}
         
        />
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      // marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16,
    },
    searchBar:{
      borderRadius: 5,
      elevation: 5,
      shadowColor: '#f3f3f3',
      shadowOffset:{width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 1,
    },
   
    list: {
      
    },
  });

export default Restaurentscreen;
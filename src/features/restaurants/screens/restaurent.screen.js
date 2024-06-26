import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { Pressable, StyleSheet} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import RestaurentInfoCard from '../components/restaurent-info-card.component';
import { FadeInView } from '../../../components/animations/fade.animation';
import { RestaurentList } from '../components/restaurant-list.styles';
import { Spacer } from '../../../components/spacer/spacer.components';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component'
import { SafeArea } from '../../../components/utility/safe.area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurents.context';
import { Search } from '../components/search.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

 
 
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
 `;

const Restaurentscreen =  ({navigation}) =>  {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  
  
  return (
    <>
      <SafeArea>
       <Search isFavouritesToggled={isToggled} onFavouriteToggle={() => setIsToggled(!isToggled)} />
        {isLoading && (<LoadingContainer>
           <Loading animating={isLoading} />
        </LoadingContainer>)}
        {isToggled && <FavouritesBar favourites={favourites}  onNavigate={navigation.navigate}/>}

        <RestaurentList
          data={restaurants}
          renderItem={(item) => {
            
            return (
                <Pressable onPress={() => navigation.navigate('RestaurentsDetail', {restaurant: item.item})}>
                                <Spacer position='bottom' size='large'>
                                  <FadeInView>
                                    <RestaurentInfoCard restaurant={item.item}/>
                                  </FadeInView>      
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
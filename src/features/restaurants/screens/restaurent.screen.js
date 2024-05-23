import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList , StyleSheet} from 'react-native';
import { ActivityIndicator, MD2Colors, Searchbar,  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';


import RestaurentInfoCard from '../components/restaurent-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utility/safe.area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurents.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  `;
const StyledSearchbar = styled(Searchbar)`
  shadow-color: ${(props) => props.theme.colors.ui.primary};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
  `;
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


const Restaurentscreen =  () =>  {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
     
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <StyledSearchbar 
            placeholder='Search'
            placeholderTextColor='#a9a9ac'
            icon={() => <Icon name='search' size={20} color='#909090' />}
            inputStyle={styles.searchBarInputStyle}
            elevation={5}
           />
        </SearchContainer>
        {isLoading && (<LoadingContainer>
           <Loading animating={isLoading} />
        </LoadingContainer>)}
        <RestaurentList
          data={restaurants}
          renderItem={(item) => {
            
            return (<Spacer position='bottom' size='large'>
              <RestaurentInfoCard restaurant={item}/>
            </Spacer>)}}
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
    searchBarInputStyle:{
      color: '#000',
      fontFamily: 'roboto',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '100',
      letterSpacing: .5
    },
    list: {
      
    },
  });

export default Restaurentscreen;
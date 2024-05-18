import * as React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, View, Text , StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5' ;
import RestaurentInfoCard from '../components/restaurent-info-card.component';

const SafeArea = styled.SafeAreaView`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  flex-direction: column;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  `;
const StyledSearchbar = styled(Searchbar)`
  shadow-color: ${(props) => props.theme.colors.ui.primary};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
  `;
const RestaurentListContainer = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`; 

const Restaurentscreen =  () =>  {

   
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
        <RestaurentListContainer>
          <RestaurentInfoCard />
        </RestaurentListContainer>
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
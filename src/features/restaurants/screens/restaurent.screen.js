import * as React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, View, Text , StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5' ;
import RestaurentInfoCard from '../components/restaurent-info-card.component';

const Container = styled.SafeAreaView`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  flex-direction: column;
`;
const Search = styled.View`padding: 16px`;
const StyledSearchbar = styled(Searchbar)`
  border-radius: 5px;
  shadow-color: #f3f3f3;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
`;
const StyledList = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  padding: 16px;
  backgroundColor: 'blue';
`; 

const Restaurentscreen =  () =>  {

    
  return (
    <>
      <Container>
        <Search>
          <StyledSearchbar 
            placeholder='Search'
            placeholderTextColor='#a9a9ac'
            icon={() => <Icon name='search' size={20} color='#909090' />}
            inputStyle={styles.searchBarInputStyle}
            elevation={10}
           />
        </Search>
        <StyledList>
          <RestaurentInfoCard />
        </StyledList>
      </Container>
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
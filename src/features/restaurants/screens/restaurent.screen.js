import * as React from 'react';
import styled from 'styled-components/native';
import { FlatList , StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';


import RestaurentInfoCard from '../components/restaurent-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utility/safe.area.component';


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
 })`` 

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
        <RestaurentList
          data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}, {name: 11}, {name: 12}]}
          renderItem={() => 
            <Spacer position='bottom' size='large'>
              <RestaurentInfoCard/>
            </Spacer>}
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
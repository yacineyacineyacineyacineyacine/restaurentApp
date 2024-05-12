import * as React from 'react';
import { SafeAreaView, View, Text , StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5' ;
import RestaurentInfoCard from '../components/restaurent-info-card.component';

const Restaurentscreen =  () =>  {

    
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar 
            placeholder='Search'
            placeholderTextColor='#a9a9ac'
            icon={() => <Icon name='search' size={20} color='#909090' />}
            style={styles.searchBar}
            inputStyle={styles.searchBarInputStyle}
            elevation={10}
           />
        </View>
        <View style={styles.list}>
          <RestaurentInfoCard />
        </View>
      </SafeAreaView>
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
      flex: 1,
      padding: 16,
      backgroundColor: 'blue',
    },
  });

export default Restaurentscreen;
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5'

const App = ({}) => {
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar 
            placholder='Search'
            placeholderTextColor='#000'
            icon={() => <Icon name='search' size={20} color='#909090' />}
            style={styles.searchBar}
            inputStyle={styles.searchBarInputStyle}
            elevation={5}
           />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
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
    elvation:5

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

export default App;

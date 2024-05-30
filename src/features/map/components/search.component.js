import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

import { LocationContext } from '../../../services/location/location.context';


const SearchContainer = styled.View`
  
  background-color: ${(props) => props.theme.colors.bg.primary};
  position: absolute;
  zIndex: 999;
  top: 20px;
  `;
const StyledSearchbar = styled(Searchbar)`
  margin: ${(props) => props.theme.space[3]};

  shadow-color: ${(props) => props.theme.colors.ui.primary};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
  position: absolute;
  zIndex: 999;
  top: 10px;
  `;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword) 

       
    return (
        
            <StyledSearchbar 
            placeholder='Search for a location'
            value={searchKeyword}
            onChangeText = {(text) =>{
              setSearchKeyword(text.trim())
            }}
            onSubmitEditing={() => search(searchKeyword)}
            placeholderTextColor='#a9a9ac'
            icon={() => <Icon name='search' size={20} color='#909090' />}
            inputStyle={styles.searchBarInputStyle}
            elevation={5}
            />
      
    );
 };

const styles = StyleSheet.create({
    searchBarInputStyle:{
        color: '#000',
        fontFamily: 'roboto',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '100',
        letterSpacing: .5
      },
})
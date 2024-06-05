import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CompactReataurentInfo } from '../restaurant/compact-restaurent-info.component';
import { Spacer } from '../spacer/spacer.components';
import { Text } from '../typography/text.component';
const FavouritesWrapper = styled.View`
  padding: 10px;
`;


export const FavouritesBar = ({ favourites, onNavigate }) =>{
    if(!favourites.length) return null
    return(
        <FavouritesWrapper>
            <Spacer position='left' size='medium'>
                <Text >Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) =>{
                    const key = restaurant.name.split(' ').join(' ');
                    
                    return(
                        <Spacer position='left' size='medium' key={key}>
                           <TouchableOpacity onPress={() => onNavigate('RestaurentsDetail', {restaurant})}> 
                              <CompactReataurentInfo restaurant={restaurant}/>
                           </TouchableOpacity>      
                         </Spacer>
                    )
                })}

            </ScrollView>
        </FavouritesWrapper>
    )
}
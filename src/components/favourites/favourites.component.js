import React, { useContext } from 'react';
import styled from 'styled-components/native'
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

const FavouriteButton = styled(TouchableOpacity)`
  backgroud-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 9;
`;


import { FavouritesContext } from '../../services/favourites/favourites.context';



export const Favourite = () => {
    const { favourites, addToFavourites, removeFromFavourites}  = useContext(FavouritesContext)
    return (
        <FavouriteButton>
          <AntDesign
            name="heart"
            size={30}
            color="red"
          />
        </FavouriteButton>
    );
};
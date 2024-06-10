import React, { useContext } from 'react';
import styled from 'styled-components/native'
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';


const FavouriteButton = styled(TouchableOpacity)`
  backgroud-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;


import { FavouritesContext } from '../../services/favourites/favourites.context';

export const Favourite = ({restaurant}) => {
    const { favourites, addToFavourites, removeFromFavourites}  = useContext(FavouritesContext);

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

    return (
        <FavouriteButton onPress={() => !isFavourite? addToFavourites(restaurant): removeFromFavourites(restaurant)}>
          <AntDesign
            name={isFavourite ? "heart" : "hearto" }
            size={25}
            color={isFavourite ? "red" : "white" }
          />
        </FavouriteButton>
    );
};
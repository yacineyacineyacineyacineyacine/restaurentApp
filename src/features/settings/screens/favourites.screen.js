import React, {useContext} from 'react';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';

import RestaurentInfoCard from '../../restaurants/components/restaurent-info-card.component';
import { RestaurentList } from '../../restaurants/components/restaurant-list.styles';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utility/safe.area.component';
import { Text } from '../../../components/typography/text.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';


const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({navigation})=>{
    const {favourites} = useContext(FavouritesContext);

    return favourites.length ? (
        <SafeArea>
            <RestaurentList
                data={favourites}
                renderItem={(item) => {
            
                    return (
                    <Pressable onPress={() => navigation.navigate('RestaurentsDetail', {restaurant: item.item})}>
                        <Spacer position='bottom' size='large'>
                            <RestaurentInfoCard restaurant={item.item}/>
                        </Spacer>
                    </Pressable>
              
            )}}
          keyExtractor={(item) => item.name}
        />

        </SafeArea>
    ): (
        <NoFavouritesArea>
            <Text>No favourites yet</Text>
        </NoFavouritesArea>
    )
}

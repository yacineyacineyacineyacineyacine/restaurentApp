import React, { useState } from 'react';
import { List } from 'react-native-paper'
import { SafeArea  } from '../../../components/utility/safe.area.component';
import styled from 'styled-components/native'

import RestaurentInfoCard from '../components/restaurent-info-card.component';

const Space = styled.View`
  padding: ${(props) => props.theme.space[3]}
`;

const RestaurentDetail  = ({navigation, route}) => {
    const { restaurant } = route.params;

    const [breakfastExpended, setBreakfastExpended] = useState(false); 
    const [lunchExpended, setLunchExpended] = useState(false);
    const [foodVariantExpended, setFoodVariantExpended] = useState(false);
    const [drinksExpended, setDrinksExpended] = useState(false);

    return (
      <SafeArea>
        <RestaurentInfoCard restaurant={restaurant}/>
            <List.Accordion
            title='Breakfast'
            left={props => <List.Icon {...props} icon='bread-slice' />}
            expanded={breakfastExpended}
            onPress={() => setBreakfastExpended(prev => !prev)}
            disableRipple>

            
        </List.Accordion>
        <List.Accordion
            title='Lunch'
            left={props => <List.Icon {...props} icon='hamburger' />}
            expanded={lunchExpended}
            onPress={() => setLunchExpended(prev => !prev)}>
            
        </List.Accordion>
        <List.Accordion
            title='Dinner'
            left={props => <List.Icon {...props} icon='food-variant' />}
            expanded={foodVariantExpended}
            onPress={() => setFoodVariantExpended(prev => !prev)}>
            
        </List.Accordion>
        <List.Accordion
            title='Drinks'
            left={props => <List.Icon {...props} icon='cup' />}
            expanded={drinksExpended}
            onPress={() => setDrinksExpended(prev => !prev)}>
            
        </List.Accordion>
      </SafeArea>
    );
};

export default RestaurentDetail;
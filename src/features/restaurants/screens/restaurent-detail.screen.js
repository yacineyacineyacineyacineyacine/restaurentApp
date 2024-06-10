import React, { useState } from 'react';
import { ScrollView } from 'react-native';
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
            <ScrollView>
                <List.Accordion
                title='Breakfast'
                left={props => <List.Icon {...props} icon='bread-slice' />}
                expanded={breakfastExpended}
                onPress={() => setBreakfastExpended(prev => !prev)}>
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>
                <List.Accordion
                    title='Lunch'
                    left={props => <List.Icon {...props} icon='hamburger' />}
                    expanded={lunchExpended}
                    onPress={() => setLunchExpended(prev => !prev)}>
                        <List.Item title="Burger w/ Fries" />
                        <List.Item title="Steak Sandwich" />
                        <List.Item title="Mushroom Soup" />
                </List.Accordion>
                <List.Accordion
                    title='Dinner'
                    left={props => <List.Icon {...props} icon='food-variant' />}
                    expanded={foodVariantExpended}
                    onPress={() => setFoodVariantExpended(prev => !prev)}>
                        <List.Item title="Spaghetti Bolognese" />
                        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                        <List.Item title="Steak Frites" />
                    
                </List.Accordion>
                <List.Accordion
                    title='Drinks'
                    left={props => <List.Icon {...props} icon='cup' />}
                    expanded={drinksExpended}
                    onPress={() => setDrinksExpended(prev => !prev)}>
                        <List.Item title="Coffee" />
                        <List.Item title="Tea" />
                        <List.Item title="Modelo" />
                        <List.Item title="Coke" />
                        <List.Item title="Fanta" />
                    
                </List.Accordion>
            </ScrollView>
            
      </SafeArea>
    );
};

export default RestaurentDetail;
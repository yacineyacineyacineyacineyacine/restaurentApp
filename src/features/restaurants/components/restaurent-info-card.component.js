import React from 'react';
import styled from 'styled-components/native'
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


const RestaurentCard = styled(Card)`
  background-color: '#fff';
`;
const RestaurentCardCover = styled(Card.Cover)`
  background-color: '#fff';
  padding: 20px;
`;
const RestaurentCardContent = styled(Card.Content)``;
const Title = styled.Text`
  padding: 2px;
  color: red;
  
`;
const RestaurentInfoCard = ({restaurent = {}}) =>  {
  
    const {
        name = 'Some restaurent',
        icon,
        photos = [
            'https://media.istockphoto.com/id/486548089/photo/melting-cheese-in-burger.jpg?s=1024x1024&w=is&k=20&c=rB1OQiPFkU48kRYeMBk_t7G6CMJUc8FdUkUWMQYGnE4='
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurent;
  return (
   <RestaurentCard elevation={5} style={styles.card}>
     <RestaurentCardCover key={name} style={styles.cover}source={{uri: photos[0]}} />
     <RestaurentCardContent>
      <Title>{name}</Title>
        {/* <Text style={styles.title}>{name}</Text> */}
     </RestaurentCardContent>
   </RestaurentCard>
  );
};

const styles = StyleSheet.create({
    card:{ backgroundColor: '#fff' },
    cover:{ backgroundColor: '#fff', padding: 20},
    title:{padding:2}
})

export default RestaurentInfoCard;
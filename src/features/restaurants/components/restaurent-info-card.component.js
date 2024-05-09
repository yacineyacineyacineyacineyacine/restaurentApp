import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

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
   <Card elevation={5} style={styles.card}>
     <Card.Cover key={name} style={styles.cover}source={{uri: photos[0]}} />
     <Card.Content>
        <Text style={styles.title}>{name}</Text>
     </Card.Content>
   </Card>
  );
};

const styles = StyleSheet.create({
    card:{ backgroundColor: '#fff' },
    cover:{ backgroundColor: '#fff', padding: 20},
    title:{padding:2}
})

export default RestaurentInfoCard;
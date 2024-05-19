import React from 'react';
import styled from 'styled-components/native'
import { Text, View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Card } from 'react-native-paper';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurentCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurentCardContent = styled(Card.Content)`
  flex-direction: column;
`;
const InfoContainer = styled.View`
 flex-direction: row;
 justify-content: space-between;
`;
const Rating = styled.View`
  flex-direction: row;
`;
const Title = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) =>  props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title}
`;
const Adress = styled.Text`
  padding: ${(props) => props.theme.space[0]};
  color: ${(props) =>  props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body}
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

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    
  return (
   <RestaurentCard elevation={5} style={styles.card}>
     <RestaurentCardCover key={name} style={styles.cover}source={{uri: photos[0]}} />
     <RestaurentCardContent>
      <Title>{name}</Title>
      <InfoContainer>
      <Rating>
        {ratingArray.map((item, index)=>{
          return  <SvgXml key={index} xml={star} width={20} height={20}/>
        })}
      </Rating>
      {isOpenNow? <SvgXml xml={open} width={20} height={20}/> : null}
      </InfoContainer>
     
      <Adress>{address}</Adress>
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
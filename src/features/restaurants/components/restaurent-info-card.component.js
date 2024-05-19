import React from 'react';
import styled from 'styled-components/native'
import { Text, View, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Card } from 'react-native-paper';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.components';

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
const Section = styled.View`
  flex-direction: row;
  align-items: center;
 `;
const Rating = styled.View`
  flex-direction: row;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: 'center';
`
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
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const RestaurentInfoCard = ({restaurent = {}}) =>  {
  
    const {
        name = 'Some restaurent',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            'https://media.istockphoto.com/id/486548089/photo/melting-cheese-in-burger.jpg?s=1024x1024&w=is&k=20&c=rB1OQiPFkU48kRYeMBk_t7G6CMJUc8FdUkUWMQYGnE4='
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurent;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    
  return (
   <RestaurentCard elevation={5} style={styles.card}>
     <RestaurentCardCover key={name} style={styles.cover}source={{uri: photos[0]}} />
     <RestaurentCardContent>
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map((item, index)=>{
            return  <SvgXml key={index} xml={star} width={20} height={20}/>
          })}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
          <Text varinat='label' style={{color: 'red'}}> 
             CLOESED TEMPORARLY
          </Text>)}
          <Spacer variant='left.large'/>
          {isOpenNow? <SvgXml xml={open} width={20} height={20}/> : null}
          <Spacer variant='left.large'/>
          <Image style={{width: 15, height: 15}} source={{uri:icon}}/>
        </SectionEnd>
      </Section>
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
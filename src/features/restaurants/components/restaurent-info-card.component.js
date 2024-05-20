import React from 'react';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.components';
import { Text } from '../../../components/typography/text.component';
import { RestaurentCard, RestaurentCardCover, RestaurentCardContent, Section, Rating, SectionEnd, Icon, Adress } from './restaurent-info-card.styles';



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
   <RestaurentCard >
     <RestaurentCardCover key={name} source={{uri: photos[0]}} />
     <RestaurentCardContent>
      <Text variant='label'>{name}</Text>
      <Section>
        <Rating>
          {ratingArray.map((item, index)=>{
            return  <SvgXml key={index} xml={star} width={20} height={20}/>
          })}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant='error'>CLOESED TEMPORARLY</Text>
          )}
          <Spacer position='left' size='medium'>
            {isOpenNow? <SvgXml xml={open} width={20} height={20}/> : null}
          </Spacer>
          <Spacer position='left' size='medium'>
             <Icon source={{uri:icon}}/>
          </Spacer>
        </SectionEnd>
      </Section>
      <Adress>{address}</Adress>
     </RestaurentCardContent>
   </RestaurentCard>
  );
};

export default RestaurentInfoCard;
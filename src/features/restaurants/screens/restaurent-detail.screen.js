import React from 'react';
import { View, Text } from 'react-native';
import { SafeArea  } from '../../../components/utility/safe.area.component';
import styled from 'styled-components/native'

import RestaurentInfoCard from '../components/restaurent-info-card.component';

const Space = styled.View`
  padding: ${(props) => props.theme.space[3]}
`;

const RestaurentDetail  = ({navigation, route}) => {
    const { restaurant } = route.params;
    
    return (
      <SafeArea>
        <Space>
          <RestaurentInfoCard restaurant={restaurant}/>
        </Space>
      </SafeArea>
    );
};

export default RestaurentDetail;
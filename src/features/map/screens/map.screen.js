// @flow 
import React from 'react';
import {  } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { Search } from '../components/search.component';

const Container = styled.View`
  flex: 1;
  justify-content: felx-end;
  align-items: center;
`;

const Map = styled(MapView)`
  flex: 1;
`;


export const MapScreen = () => {
    return (
        <>
            <Search/>
            <Map />
        </>
    );
};
import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3
};

const positionVaraint = {
    top: 'margin-top',
    left: 'margin-left',
    right: 'margin-right',
    bottom: 'margin-bottom'
};

const getVariant = (position, size, theme) =>{
    const sizeIndex = sizeVariant[size];
    const property = positionVaraint[position];
   return `${property}: ${theme.space[sizeIndex]}`;
}

export const Spacer = styled.View`
  ${({position, size, theme}) => getVariant(position, size, theme)}
`;

Spacer.defaulProps= {
    position: 'top',
    size: 'small'
};
import * as React from 'react';
import { View } from 'react-native';
import styled, {useTheme} from 'styled-components/native';

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

const SpacerView = styled.View`
  ${({variant}) => variant}
`;

const getVariant = (position, size, theme) =>{
    const sizeIndex = sizeVariant[size];
    const property = positionVaraint[position];
   return `${property}: ${theme.space[sizeIndex]}`;
}

export const Spacer = ({position, size, children}) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>
}

Spacer.defaulProps= {
    position: 'top',
    size: 'small'
};
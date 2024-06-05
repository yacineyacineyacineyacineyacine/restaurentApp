import React from 'react';
import { CompactReataurentInfo } from '../../../components/restaurant/compact-restaurent-info.component';

export const MapCallout = ({restaurant}) => {
    
    return (
        <CompactReataurentInfo restaurant={restaurant} isMap={true}/>
        
    );
};
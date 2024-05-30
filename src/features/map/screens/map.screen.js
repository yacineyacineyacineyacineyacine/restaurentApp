// @flow 
import React, {useContext, useEffect, useState} from 'react';
import {  } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import styled from 'styled-components/native';

import { Search } from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurents.context';

const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = () => {

    const { location } = useContext(LocationContext);
    const { restaurants } = useContext(RestaurantsContext);
    const [latDelta, setLatDetla] = useState(0);
    const [lngDelta, setLngDelta] = useState(0);
    
    const { lat, lng, viewport } = location;
    

    useEffect(() =>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDetla(northeastLat - southwestLat);

        const northeastLng = viewport.northeast.lng;
        const southwestLng = viewport.southwest.lng

        setLngDelta(northeastLng - southwestLng);

    }, [location, viewport]);
    
   

    return (
        <>
           <Search/>
           <Map 
           initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02
           }}
           >
             {restaurants.map((restaurant, index) =>{
                // console.log(restaurant.geometry.location);
                return <Marker 
                    key={`marker-${restaurant.placeId}-${index}`}
                    coordinate={{
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng,
                    }} />;
             })}

           </Map>
        </>
    );
};
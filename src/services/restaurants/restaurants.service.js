import { mocks, mockImages } from './mock/index'
import camelize from 'camelize';
export const restaurantsRequests = (location = '37.7749295,-122.4194155') => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock){
            reject('not found');
        }
        resolve(mocks[location]);
    })
};

export const restaurantsTransform = ({results = []}) => {
    const mapedResults = results.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((p) =>{
        return mockImages[Math.ceil(Math.random() * (mockImages.length -1))]
      });
    return{
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      address: restaurant.vicinity
    }
  })
    return camelize(mapedResults);
}
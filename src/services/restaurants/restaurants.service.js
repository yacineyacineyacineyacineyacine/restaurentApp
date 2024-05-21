import { mocks } from './mock/index'
export const restaurantsRequests = (location = '37.7749295,-122.4194155') => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock){
            reject('not found');
        }
        resolve(mocks[location]);
    })
};

const restaurantsTransform = ({results = []}) => {
    const mapedResults = results.map((restaurant) => {
    return{
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }
  })
    return camelize(mapedResults);
}
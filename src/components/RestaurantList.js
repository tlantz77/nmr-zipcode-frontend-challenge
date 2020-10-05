import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  const restaurants = props.restaurants.map(restaurant => {
    return <RestaurantCard key={restaurant.place_id} restaurant={restaurant}/>
  });

  return <div className='restaurant-list'>{restaurants}</div>;
};

export default RestaurantList;
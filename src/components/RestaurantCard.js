import React, { useState } from 'react';

const RestaurantCard = (props) => {
  const [visited, setVisited] = useState(false);
  const {name} = props.restaurant;
  const setIfVisited = () => {
    setVisited(true)
  }
  return (
    <div >
      <input type="checkbox" checked={visited} onChange={setIfVisited}/>
      <span>{name}</span>
    </div>
  )
}
 
export default RestaurantCard;
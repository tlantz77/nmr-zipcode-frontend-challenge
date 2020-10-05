import React, { useState } from 'react';

const RestaurantCard = ({name}) => {
  const [visited, setVisited] = useState(false);

  return (
    <div >
      <input type="checkbox" checked={visited} onChange={setVisited(true)}/>
      <span>{name}</span>
    </div>
  )
}
 
export default RestaurantCard;
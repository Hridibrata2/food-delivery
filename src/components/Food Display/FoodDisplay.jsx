import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext.jsx'

const FoodDisplay = () => {

    const { food_list } = useContext(StoreContext);

  return (
    <div className='food_display' id='food_display'>FoodDisplay</div>
  ) 
}

export default FoodDisplay
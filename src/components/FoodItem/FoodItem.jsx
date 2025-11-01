import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, image, price, description}) => {

const[itemCount, setItemCount] = useState(0);

  return (
    <div className='food_Item'>
        <div className="food_item_img_container">
            <img className='food_item_image' src={image} alt="" />
            {!itemCount ? <img className= "add" onClick={() => setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=''/>
            : <div className="food_item_counter">
              <img onClick={() => setItemCount(prev => prev-1)} src={assets.remove_icon_red} alt=''/>
              <p>{itemCount}</p>
              <img onClick={() => setItemCount(prev => prev +1)} src={assets.add_icon_green} alt="" />
            </div>
            }
        </div>
        <div className="food_item_info">
            <div className="food_item_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food_item_desc">{description}</p>
            <p className="food_item_price">₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
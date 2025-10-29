import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, image, price, description}) => {
  return (
    <div className='fooditem'>
        <div className="food_item_img_container">
            <img className='food_item_image' src={image} alt="" />
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
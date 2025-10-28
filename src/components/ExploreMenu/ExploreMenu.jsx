import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore_menu_text'>Explore the diverse menu featuring a wide range of delicious dishes crafted with the freshest ingredients</p>
        <div className="explore_menu_list">
            { menu_list.map((item, index) => {
                const key = item.id ?? index;
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} className="explore_menu_list_item" key={index}>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name || `menu item ${index}`} />
                            <p>{item.menu_name}</p>
                        </div>
                    ) 
                })
            }
        </div>
        <hr /> 
    </div>
  )
}
export default ExploreMenu
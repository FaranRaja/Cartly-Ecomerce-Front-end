import React from 'react'
import ProductE from './ProductE'

const RightEnding = () => {

    const items = [
        {
            "name": "Product",
            "List": ["Tshirt","Jacket","Shoes","Pants","Sunglasses"]
        },

         {
            "name": "Categories",
            "List": ["Man","Woman","Kids","Gift","New Arrivals"]
        },

         {
            "name": "Our Social Media",
            "List": ["Facebook","Instagram","Youtube","Twitter"]
        }
    ]

    
  return (
    <div className='right-e'>


        {
            items.map((item,key) => {
                return (
                    <ProductE name = {item.name} list = {item.List} key = {key} />
                )
            })
        }
      
    </div>
  )
}

export default RightEnding

import React from 'react'

const Product = (props) => {
  return (
    <div className='product'>
      <div className="product-img-container">
                    <img src={props.img} alt="" srcset="" className='product-img'/>
            </div>

            <h2>{props.name}</h2>
            <span>{props.description}</span>
            <h2>${props.price}</h2>
    </div>
  )
}

export default Product

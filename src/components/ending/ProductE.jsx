import React from 'react'

const ProductE = (props) => {
  return (
    <div className="products-e">
            <h3>{props.name}</h3>
            <div className="items-e">
                {
                    props.list.map((item) => {
                        return <h6>{item}</h6>
                    })
                }
                

            </div>
        </div>
  )
}

export default ProductE

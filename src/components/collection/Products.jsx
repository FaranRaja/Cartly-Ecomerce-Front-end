import React from 'react'
import Product from './Product'

const Products = () => {

    const products = [
  {
    name: "White T-Shirt",
    description: "Classic White T-Shirt",
    price: 20,
    img: "https://tulos-sqq5.vercel.app/whitet.webp"
  },
  {
    name: "Brown Leather Jacket",
    description: "Natural Brown Leather Jacket",
    price: 70,
    img: "https://tulos-sqq5.vercel.app/jacket.webp"
  },
  {
    name: "Blundstone Shoes",
    description: "Blundstone Classic Boot",
    price: 95,
    img: "https://tulos-sqq5.vercel.app/Blundstone.webp"
  },
  {
    name: "Bomber Jacket",
    description: "Bomber Classic Jacket",
    price: 65,
    img: "https://tulos-sqq5.vercel.app/bomber.webp"
  },
  {
    name: "Women Black Boot",
    description: "Classic Women Boot",
    price: 65,
    img: "https://tulos-sqq5.vercel.app/blackboot.webp"
  },
  {
    name: "Buttonless Polo T-Shirt",
    description: "Classic Polo T-Shirt",
    price: 110,
    img: "https://tulos-sqq5.vercel.app/pants.webp"
  }
];


  return (
    <div className='products'>



        {
            products.map((product,key) => {
                return <Product key = {key}  name = {product.name} description = {product.description} price = {product.price} img = {product.img} />
            })
        }


        
      
    </div>
  )
}

export default Products

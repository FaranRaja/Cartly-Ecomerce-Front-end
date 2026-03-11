import React from 'react'
import Type from './Type'

const Categories = () => {


  const types = [
  {
    name: "MEN",
    img: "https://tulos-sqq5.vercel.app/man.webp"
  },
  {
    name: "WOMEN",
    img: "https://tulos-sqq5.vercel.app/woman.webp"
  },
  {
    name: "KIDS",
    img: "https://tulos-sqq5.vercel.app/kid.webp"
  },
];



  return (
    <div className='types'>


      
        
      {
        types.map((type,key) => {
          return (
            <Type key = {key}   name ={type.name} img = {type.img}  />
          )
        })
      }



      
      
    </div>
  )
}

export default Categories

import React from 'react'
import {Search} from 'lucide-react'
import {ShoppingCart} from 'lucide-react'

const Options = () => {
  return (
    <div className='options'>
      <Search className='options-i' />
      <ShoppingCart className='options-i'/>
      <button className='login'>LOGIN</button>
    </div>
  )
}

export default Options

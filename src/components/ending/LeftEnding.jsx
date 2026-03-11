import React from 'react'
import { useState } from 'react'

const LeftEnding = () => {



    const [value,setValue] = useState('')


    const updateValue = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setValue('')
    }

  return (
    <div className='left-e'>

        <h1>CARTLY</h1>
        <span>Get newsletter update for upcoming product and best discount for all item</span>

        <form action="">
            <input type="email" placeholder='Email' value = {value} onChange={(e) => {
                updateValue(e)
            }}/>
            <button className='submit-form' onClick={(e) => {
                handleSubmit(e)}}>Submit</button>
        </form>

      
    </div>
  )
}

export default LeftEnding

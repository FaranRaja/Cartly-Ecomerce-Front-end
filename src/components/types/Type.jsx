import React from 'react'

const Type = (props) => {
  return (
    

    <div className="type">
        <img src={props.img} alt="" srcset="" className='type-img'/>

        <div className="type-content">
          <h1>{props.name}</h1>
          <button className='type-details'>SEE DETAILS</button>
        </div>
        
      </div>

  )
}

export default Type

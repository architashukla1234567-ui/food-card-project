import React from 'react'
 

const Card = (props) => {
  return (
    <div className='parent'>
        <img
  src={props.image}
  alt={props.name}
/>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p style={{fontWeight: 'bold'}}>Rs {props.price}</p>
        <p style={{fontWeight: 'bold'}}>Rating: {props.rating}/5</p>
        <p style={{fontWeight: 'bold'}}>Serving: {props.servings} people</p>
        <button>start cooking</button>
    </div>
  )
}

export default Card

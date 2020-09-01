import React from 'react'

const Pokemon = (props) => {
  return (
    <div>
    <p>{props.name}</p>
    <p>{props.kind}</p>
    </div>
  )
}

export default Pokemon

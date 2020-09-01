import React from 'react'
import Ability from './Ability'

const Pokemon = (props) => {

  let abilityComponents = props.abilities.map((ability) => {
    return (
      <li><Ability key={ability.id} name={ability.name} /></li>
    )
  })

  return (
    <div>
    <p>{props.name}</p>
    <p>{props.kind}</p>
    <ul>{abilityComponents}</ul>
    </div>
  )
}

export default Pokemon

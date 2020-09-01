import React from 'react'
import Ability from './Ability'

const Pokemon = (props) => {

  let abilityComponents = props.abilities.map((ability) => {
    return (
      <div className="small-6 ability-small-4">
      <Ability key={ability.id} name={ability.name} />
      </div>
    )
  })

  return (
    <div>
    <div className="grid-y">
    <h2 className="pokemon-name">{props.name}</h2>
    <p className="ability-name">{props.kind} Type</p>
    </div>
    <h4 id="abilities-header">Abilities</h4>
    <div className="grid-x ability-grid">
    {abilityComponents}
    </div>
    </div>
  )
}

export default Pokemon

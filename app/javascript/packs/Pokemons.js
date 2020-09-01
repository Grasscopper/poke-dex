import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'

const Pokemons = (props) => {
  let [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("/api/pokemons")
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}: ${response.statusText}`
        let error = new Error(errorMessage)
        throw (error)
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      setPokemons(body)
    })
    .catch((error) => {
      console.error(`Error fetching pokemon: ${error.message}`)
    })
  }, [])

  let pokemonComponents = pokemons.map((pokemon) => {
    return (
      <div className="small-4">
      <h4 id="pokemon-header">Pokémon</h4>
      <Pokemon key={pokemon.id} name={pokemon.name} kind={pokemon.kind} abilities={pokemon.abilities} />
      </div>
    )
  })

  return (
    <div className="grid-container">
    <div className="grid-x">
    {pokemonComponents}
    </div>
    </div>
  )
}

export default Pokemons

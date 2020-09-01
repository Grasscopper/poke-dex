import React from 'react'
import ReactDOM from 'react-dom'
import Pokemons from './Pokemons'

const App = (props) => {
  return (
    <div>
    <h1 id="pokedex">Pokédex</h1>
    <Pokemons />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

import React from 'react'
import ReactDOM from 'react-dom'
import Pokemons from './Pokemons'

const App = (props) => {
  return (
    <Pokemons />
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

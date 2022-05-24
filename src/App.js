<<<<<<< HEAD
import React from 'react'
=======
import React, { Component }  from 'react';

>>>>>>> 10916dcc8f662ca9a4704ebaa7914b7e57f1975a
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'
import api from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if (input === '' || setCep.cep === '') {
      alert('Preencha algum cep!')
      alert(cep.cep)
      return
    }

    try {
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      setInput('')
    } catch (error) {
      alert('Ops, erro na app')
      setInput('')
      return
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={e => setInput(e.target.value)}
          maxlength="8"
        ></input>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"></FiSearch>
        </button>
      </div>
      <p className="avisoNumeros">Apenas Números</p>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>
        </main>
      )}
    </div>
  )
}

export default App

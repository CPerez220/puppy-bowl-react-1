import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar"
import AllPlayers from "./AllPlayers"
import AddPlayerForm from "./AddPlayerForm"

function App() {
  

  return (
    <>
      <Navbar/>
        
      <AddPlayerForm />
      <AllPlayers />
    </>
  )
}

export default App

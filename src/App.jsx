import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import {cards} from './components/index'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <section className='container'>
        <Hero />
      </section>
      <section className='container'>
        <Card cards={cards} />
      </section>
    </>
  )
}

export default App

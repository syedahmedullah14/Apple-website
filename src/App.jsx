import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  const [count, setCount] = useState(0)

  return (
  <main className='bg-black'>
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
  </main>
  )
}

export default App

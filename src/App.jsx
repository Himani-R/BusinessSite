import { useState } from 'react'
import { Land } from './Pages/Landing'
import Hero from './Components/Landing/Hero' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Land/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Services from "./services-section/services"
import CommitmentSection from './commitment-section/CommitmentSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-300'>hello i am h1</h1>
      <Services/>
      <CommitmentSection/>
    </>
  )
}

export default App

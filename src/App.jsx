import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoHeader from './components/InfoHeader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <InfoHeader></InfoHeader>
  )
}

export default App

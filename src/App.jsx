import { useState } from 'react'
import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/home'
import Sender from './components/sender'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Home/> */}
      <Sender/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from "./pages/home/Home.jsx"
// import "./pages/login/login.jsx"
// import "./pages/register/register.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from "./pages/home/Home.jsx"
// import Login from './pages/login/Login.jsx'
import  Register from "./pages/register/Register.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    {/* <Login/> */}
    <Register/>
    </>
  )
}

export default App

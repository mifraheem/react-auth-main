

import './App.css'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
function App() {
  

  return (
    <div className="App">

      <BrowserRouter>
    <Navbar/>
    <main className="form-signin w-100 m-auto">
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={LoginPage}/>
      <Route path='/register' Component={Register}/>
      </Routes>
      
    </main>
      </BrowserRouter>
    </div>

  )
}

export default App

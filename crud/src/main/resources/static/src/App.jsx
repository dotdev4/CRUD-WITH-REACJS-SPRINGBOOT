import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './userBtn/AddUser'
import EditUser from './userBtn/EditUser'
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/edituser/:id' element={<EditUser/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

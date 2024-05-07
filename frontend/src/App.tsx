import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
// import Login from './pages/login/Login'
// import Signup from './pages/signup/Signup'

function App() {
const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login/> */}
      {/* <Signup/> */}
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={authUser ?<Navigate to='/'/> :  <Login/>}/>
        <Route path='/signup' element={ authUser ? <Navigate to='/'/> : <Signup/>}/>
      </Routes>
      {/* <Home/> */}

      <Toaster/>
    </div>

  )
}

export default App

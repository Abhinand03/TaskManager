import './App.css'
import { Route,Routes } from 'react-router-dom'
import Dashbord from './Pages/Dashbord'
import AddTask from './Pages/AddTask'
import Profile from './Pages/Profile'
import Sidebar from './components/Sidebar'
import Login from './Pages/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Login/>}/>
      <Route path={'/dash'} element={<Dashbord/>}/>
      <Route path={'/add'} element={<AddTask/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
    </Routes>
    
   
     
    </>
  )
}

export default App

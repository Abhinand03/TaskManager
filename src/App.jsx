import './App.css'
import { Route,Routes } from 'react-router-dom'
import Dashbord from './Pages/Dashbord'
import AddTask from './Pages/AddTask'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Dashbord/>}/>
      <Route path={'/add'} element={<AddTask/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
    </Routes>
    
   
     
    </>
  )
}

export default App

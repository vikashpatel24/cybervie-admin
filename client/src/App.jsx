import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='max-w-7xl container mx-auto px-4'>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default App

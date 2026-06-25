import {Route, Routes} from 'react-router-dom'
import  Home  from  './pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Product from './Pages/Product';

const App = () => {
  return (

    <div> 
        <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Routes>
    </div>
  )
}
export default App
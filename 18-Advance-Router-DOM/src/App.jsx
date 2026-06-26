import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'   
import Navbar2 from './Components/Navbar2'   
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import {Route, Routes} from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
 

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
        <Navbar/>
        <Navbar2/>
        
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Product' element={<Product/>} >
                  <Route path='Men' element={<Men/>} />
                  <Route path='Women' element={<Women/>} />
                  <Route path='Kids' element={<Kids/>} />
                </Route>
                <Route path='/Courses' element={<Courses/>} />
                <Route path='/Courses/:CourseId' element={<CourseDetails/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        <Fotter/>
    </div>
  )
}

export default App
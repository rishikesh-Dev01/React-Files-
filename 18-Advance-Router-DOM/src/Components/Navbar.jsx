 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 itmes-center py-4  px-8 gap-5'>
        <h2 className='text-2xl font-bold '>RISHI</h2>
        <div className='flex gap-10'>
            <Link className='text-lg font-medium' to='/'>Home</Link>
            <Link className='text-lg font-medium' to='/About'>About</Link>
            <Link className='text-lg font-medium' to='/Courses'>Courses</Link>
            <Link className='text-lg font-medium' to='/Contact'>Contact</Link>
            <Link className='text-lg font-medium' to='/Product'>Product</Link>
             
        </div>
    </div>
  )
}

export default Navbar
 
 const Navbar = (props) => {
   return (
     <div>
          
         <button onClick={() => {
           props.setTheme('Dark')
         }}>change theme</button>
     </div>
   )
 }
 
 export default Navbar
  
 
 const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submited')
  }


   return (
     <div>
      <form onSubmit={(e) => {
          submitHandler(e)
      }}>
        <input type="text" placeholder='Enter user name' />
        <button>submit</button>
      </form>
     </div>
   )
 }
 
 export default App 
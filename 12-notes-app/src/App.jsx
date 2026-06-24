import { useState } from "react";
 
 

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e) => {
    e.preventDefault()
    const  copyTaks = [...task];

    copyTaks.push({title, details})
    setTask(copyTaks)
    

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
     const copyTask = [...task];
     
     copyTask.splice(idx, 1)

     setTask(copyTask)
  }


  return (
    <div className='bg-black text-white h-screen lg:flex'>
      <form 
      onSubmit={(e) => {
          submitHandler(e)
      }} 
        className='flex flex-col   lg:w-1/2 gap-4 p-10'>
        <h1 className="text-4xl font-bold">Add Notes</h1>

      {/* PAHLA INPUT FOR HEADING  */}
        <input 
        type="text" 
        placeholder="Enter notes Heading" 
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        />

      {/* DETAIL VALA INPUT  */}
        <textarea  
        placeholder='Enter Details'
        className='px-5 py-2 h-32 font-medium w-full items-start flex-row  border-2 outline-none rounded'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
        />

        <button className='bg-white font-medium active:scale-95 w-full text-black outline-none rounded px-5 py-2'>Add Note</button>
        
        
      </form>
       <div className='border-1-2 p-10 lg:w-1/2 lg:border-l-2'>
          <h1 className='text-4xl font-bold'>Recents Notes</h1>
         <div  className='flex flex-wrap   gap-5 bg-cover itmes-start justify-start mt-5 h-[90] overflow-auto '>
           {task.map(function(elem, idx){
              
              return  <div key={idx} className=' flex justify-between flex-col items-start h-52 w-40 relative rounded-2xl bg-cover  text-black pt-8 pb-4 bg-[url("https://imgs.search.brave.com/4i-kuqeolpCBtB8uUaTXrKz8PNO1Gnlxvli4io6f8Rs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY5NC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw")]'>
                
                 <div>
                      <h3 className="leading-tight text-xl font-bold px-4">{elem.title}</h3>
                      <p className=" mt-4 leading-tight font-medium text-gray-500 px-4">{elem.details}</p>
                     
                 </div>
                  <button onClick={() => {
                      deleteNote(idx)
                  }} className="font-bold w-37 m-2  bg-red-900 px-2 text-white py-2 cursor-pointer active:scale-95 text-xs rounded-2xl">Delete</button>
              </div>
              
           })}
         </div>
       </div>
      
    </div>
  )
}

export default App
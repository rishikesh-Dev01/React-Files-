import { useEffect, useState } from "react"

 

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function () {
//     console.log('use Effect is runing...');
    
//   }, [num])
//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num {num2}</h1>
       
//        <button  onClick={() => {
//           setNum(num + 1)
//           setNum2(num2 + 10)
//        }}>Click</button>
//     </div>
//   )
// }

// export default App


 

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  
    function aChanging() {
      console.log('A is changing');
      
    }
  
    function bChanging() {
      console.log('B is changing');
      
    }
  
    useEffect(function() {
     aChanging()
    }, [a])

    useEffect(function() {
     bChanging()
    }, [b])

  return (
    <div>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>

      <button onClick={() => {
          setA(a + 1)
      }}>Changing A</button>


      <button onClick={() => {
          setB(b - 1)
      }}>Changing B</button>
    </div>
  )
}

export default App
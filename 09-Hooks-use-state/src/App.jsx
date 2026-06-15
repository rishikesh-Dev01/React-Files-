// import { useState } from "react"

import { useState } from "react"

 

 

// const App = () => {
    
  
//   const [num, setNum] = useState(10)
//   const [userName, setUserName] = useState('rishi')
    
//    function changeNum() {
//          setNum(20)
//          setUserName('Rishikesh')
//    }

//   return (
//     <div>
//       <h1>Value of num is {num} <br /> Value of user is {userName}</h1>
//       <button onClick={changeNum}>click</button>
//     </div>
//   )
// }

// export default App


// COUNTER GAME 

// const App = () => {

//     const [num, setNum] = useState(0)

     

//     function increaseNum() {
//         setNum(num+1)
//     }

//     function decreaseNum() {
//        setNum(num-1)
//     }

//     function increaby5() {
//        setNum(num+5)
//     }

//   return (
//     <div>
//         <h1>{num}</h1>
//         <button onClick={increaseNum}>Increase</button>
//         <button onClick={decreaseNum}>Decrease</button>
//         <button onClick={increaby5}>incre by 5</button>
     
//     </div>
//   )
// }

// export default App


// Advanced manegment concept

 

const App = () => {

  const [num, setNum] = useState({user:'rishikesh', age:20})

  const btnClicked = () => {
    const newNum = {...num}
    newNum.user = 'Amit'
    setNum(newNum)
  }

  return (
    <div>
        <h1>{num.user} {num.age}</h1>
        <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
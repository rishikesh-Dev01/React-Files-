 

const App = () => {
//  localStorage.setItem('age', '18')
//  localStorage.removeItem(  'age')
//   const user = localStorage.getItem('user')

//  const user = {
//     username:'Rishikesh pal',
//     age:'18',
//     city:'Ranchi'
//  }
  
//  localStorage.setItem('user', JSON.stringify(user))

// Check our localstorage 

const user = JSON.parse(localStorage.getItem('user'))

console.log(user);


  return (
    <div>App</div>
  )
}

export default App
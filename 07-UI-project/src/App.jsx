 import Section1 from './Components/Section1/section1'
 import Section2 from './Components/Section2/section2'
 
 const App = () => {

  const users = [
    { 
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'blue',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underserve',
      color:'lightgreen',
    },
    {
      img:'https://images.unsplash.com/photo-1758598497505-b5479091c1be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underbanked',
      color: 'black',
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag: 'Underwear',
      color: 'pink',
    },

    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag: 'Avarage',
      color: 'royalblue',
    }
  ]

   return (
     <div >
       <Section1 users={users}/>
       <Section2/>
     </div>
   )
 }
 
 export default App
 
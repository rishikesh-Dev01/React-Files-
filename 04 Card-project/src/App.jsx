  
import Card from './Conponents/Card'
 
 

const App = () => {

  const jobOpenings = [
  {
    brandLogo:"https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ywtSPTSt9vlope_vXBKLfH2tYX9sDRsYBudPP916G2U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/ZWxlbWVudF9vdXIv/c20vMjAxODA2Mjcv/c21fNWIzMzQ2MTE4/NjBmYS5qcGc",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/_E1HH8tG9czj5Ch2yCcnj5NwBhWq3t5YyuVeaRMUWvI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/OTUzLzAwMC9zbWFs/bC9hbWF6b24tcGF5/LWxvZ28tZnJlZS1w/bmcucG5n",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/6qN1EdyQu9i7IE6EyFs4Lz2HKvVD6B99pgDiPFK7Lr0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWdubWFudGlj/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA3/L05ldGZsaXgtTG9n/by5wbmc",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/OPbQbN5wigWM8yCtwOu3AHMsCpW5U91KOcRd9CF4eo0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzU3/LzA2LzRiNTcwNjg3/ZmJlNjM0NmIwODdk/MTRhYjc0MWQ0ZDll/LmpwZw",
    companyName: "Apple",
    datePosted: "4 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/1nuTUJyi-eGDQJSB1lEBC0myCPxFotME0DXzwP-SKi8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzIvYWRvYmUt/YWNyb2JhdC1sb2dv/LXBuZ19zZWVrbG9n/by0zMDAzNDIucG5n",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/6TOekRH3YJHF8saijpyt5s8Uat0oPC9KagJwCkHRC98/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQwLzIvc3BvdGlm/eS1sb2dvLXBuZ19z/ZWVrbG9nby00MDg1/NjAucG5n",
    companyName: "Spotify",
    datePosted: "8 days ago",
    post: "Node.js Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/1zquyfJ0W23eyWgQATw-b62cImtSyKhPcGNPX8t0GQ8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IyLzE2/LzJlL2IyMTYyZTMz/NWVhMGRjMTAxYzBk/ZWZjMjg4YjVhYzY3/LmpwZw",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ndl4Y-SO-El7Fn_3stZfJyY30lVX92Z2lUildTv1DuI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9w/YXBlcmN1dC8xMjAw/L2xpbmtlZGluLmpw/Zw",
    companyName: "LinkedIn",
    datePosted: "1 month ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Gurgaon, India"
  }
];

 console.log(jobOpenings)
 
  return (
    <div className='parent'>
        {jobOpenings.map(function(elem, idx) {
            return <div key={idx}>
              <Card company={elem.companyName} datePosted={elem.datePosted} posts={elem.post} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2}  brandLogo={elem.brandLogo}/>
            </div>
        })}
    </div>
  )
}

export default App

 
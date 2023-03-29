import React,{useEffect, useState} from 'react'

function App() {
  const [backendResponse,setBackendResponse] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        console.log(data)
        setBackendResponse(data)
      }
    )
  },[])

  return (
    <div>
      {(typeof backendResponse.users ==='undefined') ? (<p>Loading</p>) :
      
      
      
      (backendResponse.users.map((value,i)=>{
       return <p key ={i}>{value}</p>

      })
)
      }
    </div>
  );
}

export default App;

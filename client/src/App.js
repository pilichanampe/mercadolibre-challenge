import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [backendData, setBackendData] = useState([])
  useEffect(() => {
    axios.get('/api')
      .then(res => {
        setBackendData(res.data.users)
      })
  }, [])


  return (
    <div>
      { 
        backendData && 
        backendData.map(user => {
          return <p key={user}>{ user }</p>
        })
      }
      mierda carajo
    </div>
  )
}

export default App
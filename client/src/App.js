import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

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
      <Link to="/product-detail">Product detail</Link> |{" "}
      <Link to="/search-results">Search results</Link>
    </div>
  )
}

export default App
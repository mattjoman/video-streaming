import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Test API connection
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))

    console.log('yes')
  }, [])

  return (
    <div>
      <h1>React + NestJS App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App 
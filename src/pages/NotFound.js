import React from 'react'
import '../styles/NotFound.css'
import notFound from '../assets/not_found.jpeg'

const NotFound = () => {
  return (
    <div className="not-found" style={{ backgroundImage: `url(${notFound})` }}>
      <h1>Cat's playing peek-a-boo</h1>
    </div>
  )
}

export default NotFound
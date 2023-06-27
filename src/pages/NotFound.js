import React from 'react'
import '../styles/NotFound.css'
import notFound from '../assets/not_found.jpeg'

const NotFound = () => {
  return (
    <div className="not-found" style={{ backgroundImage: `url(${notFound})` }}>
      
    </div>
  )
}

export default NotFound
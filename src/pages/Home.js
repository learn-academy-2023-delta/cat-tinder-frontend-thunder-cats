import React from 'react'
import '../styles/Home.css'
import thunderCats from '../assets/thunder_cats.jpg'

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${thunderCats})` }} alt="background_image" >
      <h1>This is a app for all Thundercats.</h1>
    </div>
  )
}

export default Home
import './App.css';
import { React, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from'./pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {Routes, Route} from 'react-router-dom'
import mockCats from './mockCats';

function App() {

  const readThunderCat = () => {
    fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then((payload) => setCat(payload))
    .catch((errors) => console.log("Cat Read ERRORS:", errors))
  }

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },

      method: "POST"
    })

    .then((response) => response.json())
    .then(() => readThunderCat())
    .catch((errors) => console.log("Cat creat erorrors:", errors))
  }
  
  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {

    body: JSON.stringify(cat),

    headers: {
      "Content-Type": "application/json"
    },

    method: "PATCH"
    })

    .then((response) => response.json())
    .then(() => readThunderCat())
    .catch((errors) => console.log("Cat update errors:", errors))
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {

      headers: {
        "Content-Type": "application/json"
      },

      method: "DELETE"
    })

    .then((response) => response.json())
    .then(() => readThunderCat())
    .catch((errors) => console.log("Cat delete errors:", errors))
  }

  const [cats, setCat] = useState([])

  useEffect(() => {
    readThunderCat()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} deleteCat={deleteCat} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

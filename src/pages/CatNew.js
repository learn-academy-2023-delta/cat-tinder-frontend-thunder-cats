import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import './CatNewStyle.css'

const CatNew = ({createCat}) => {

  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value})
  } 

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <>
    <div className='center'>
      <h2>Enter a new Thunder Cat!!</h2>
      
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input name="name" type="text" placeholder='Enter name here' onChange={handleChange} value={newCat.name}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input name="age" type="number" placeholder='Enter age here' onChange={handleChange} value={newCat.age}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input name="enjoys" type="text" placeholder='Enter a hobby here' onChange={handleChange} value={CatNew.enjoys}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="image">Image</Label>
          <Input name="image" type="url" placeholder='Enter a picture here' onChange={handleChange} value={CatNew.image}></Input>
        </FormGroup>

        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    </>
    
  )
}

export default CatNew
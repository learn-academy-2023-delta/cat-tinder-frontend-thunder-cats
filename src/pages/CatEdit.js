import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const CatEdit = ({ cats, updateCat}) => {
  const { id } = useParams()

  const navigate = useNavigate()

  let currentThunderCat = cats?.find(cat => cat.id === +id)

  const [editThunderCat, setEditThunderCat] = useState({
    name: currentThunderCat.name,
    age: currentThunderCat.age,
    enjoys: currentThunderCat.enjoys,
    image: currentThunderCat.image
  })

  const handleChange = (e) => {
    setEditThunderCat({ ...editThunderCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateCat(editThunderCat, currentThunderCat.id)
    navigate(`/catshow/${currentThunderCat.id}`)
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input name="name" type="text" placeholder='Edit name here' onChange={handleChange} value={editThunderCat.name}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input name="age" type="number" placeholder='Edit age here' onChange={handleChange} value={editThunderCat.age}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input name="enjoys" type="text" placeholder='Edit a hobby here' onChange={handleChange} value={editThunderCat.enjoys}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="image">Image</Label>
          <Input name="image" type="url" placeholder='Edit a picture here' onChange={handleChange} value={editThunderCat.image}></Input>
        </FormGroup>

        <Button onClick={handleSubmit}>
          Submit Updated Thunder Cat
        </Button>
      </Form>
    </>
  )
}

export default CatEdit
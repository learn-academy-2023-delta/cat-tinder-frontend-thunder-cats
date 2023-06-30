import React from 'react'
import {Card, CardBody, CardSubtitle, CardTitle, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import '../styles/CatIndex.css'



const CatIndex = ({cats}) => {
  return (
    <>
    <h1>List of All Thunder Cats</h1>
    <div className='grid-container'>
    {cats?.map((cat, index) =>{
      return (

              <Card key={index} style={{width: '16rem'}}>
                <img alt={cat.name} src={cat.image}/>
              <CardBody>
          <CardTitle tag="h5">{cat.name}</CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {cat.age}
          </CardSubtitle>
          <Button>
            <NavLink to={`/catshow/${cat.id}`}>More About Me</NavLink>
          </Button>
        </CardBody>
      </Card>
    



      )
    })}
    </div>
    </>
  )
}

export default CatIndex
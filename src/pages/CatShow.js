import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'

const CatShow = ({cats, deleteCat}) => {
  const { id } = useParams()
  let selectedThunderCat = cats?.find(cat => cat.id === +id)



  return (

    <div>
      {selectedThunderCat && (
        <Card
        style={{
          width: '21rem'
        }}
      >
        <img
          alt={selectedThunderCat.name}
          src={selectedThunderCat.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            {selectedThunderCat.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {selectedThunderCat.age}
          </CardSubtitle>
          <CardText>
            {selectedThunderCat.enjoys}
          </CardText>
        </CardBody>
      </Card>
      )}
      <Button>
        <NavLink to={`/catedit/${selectedThunderCat.id}`} >
        Edit Thunder Cat Profile </NavLink>
      </Button>

      <Button onClick={() => deleteCat(id)}>
        <NavLink to={'/catindex'}>
        Delete Cat</NavLink>
      </Button>
      
    </div>
  
  )
}

export default CatShow
import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap'



const CatShow = ({cats}) => {
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
    </div>
  )
}

export default CatShow
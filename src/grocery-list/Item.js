import React from 'react'
import {List, Card, Button} from 'semantic-ui-react'

//presentational component

const styles = {
  todo: {
    cursor: 'pointer',
  },
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  },
}

const Item = ({ id, name, price, complete, itemClick, remove }) => (
  <container>
    <Card
      style={complete ? {...styles.item, ...styles.complete} : styles.item }
      onClick={ () => itemClick(id)}
     >
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>${price}</Card.Meta>
      </Card.Content>
    </Card>
    <Button color='red' onClick={ () => remove(id) } >
      Delete
    </Button>
    <br />
    <br />
    <br />
  </container>

)

export default Item

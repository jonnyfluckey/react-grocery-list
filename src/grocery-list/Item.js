import React from 'react'
import {List, Card} from 'semantic-ui-react'

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

const Item = ({ id, name, price, complete, itemClick }) => (
  // <List.Item
  // style={complete ? {...styles.item, ...styles.complete} : styles.item }
  // onClick={ () => itemClick(id)}
  // >
  //   <List.Icon name="hand point right outline" />
  //   <List.Content>
  //   {name}:
  //   ${price}
  //   </List.Content>
  //   </List.Item>

  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>${price}</Card.Meta>
    </Card.Content>

  </Card>


)

export default Item
import React from 'react'
import Item from './Item'
import {List} from 'semantic-ui-react'


//presentational component
//item in .map is passed from app.js return function
const GroceryList = ({items, name, itemClick}) => (
  <div>
    <h2>{name}</h2>
    <List>
    
      {
        items.map(item => <Item key={item.id} {...item} itemClick={itemClick} />)
        
      }
    </List>
  </div>
)

export default GroceryList

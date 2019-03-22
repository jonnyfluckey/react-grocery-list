import React from 'react'
import Item from './Item'

//presentational component
//item in .map is passed from app.js return function
const GroceryList = ({items, name, todoClick}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {
        items.map(item => <Item key={item.id} {...item} itemClick={itemClick} />
      }
    </ul>
  </div>
)

export default GroceryList

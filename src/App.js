import React, { Component } from 'react';
import GroceryList from './grocery-list/GroceryList'
import ItemForm from './grocery-list/ItemForm';

class App extends Component {

  state = {
    items: [
      { id: 1, name: "apples", price: 1.00, complete: false },
      { id: 1, name: "bananas", price: 1.25, complete: false },
      { id: 1, name: "lettuce", price: 1.50, complete: false }
    ]
  }

  addItem = (itemData) => {
  //  const { items } = this.state
    let item = { id: this.getUniqId(), ...itemData }
    this.setState({ items: [item, ...this.state.items] })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }

  itemClick = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
      })
    })
  }


  render() {
    const { items, } = this.state
    return (
      <div>
        <ItemForm addItem={this.addItem} />
        <GroceryList name="grocery list" items={this.state.items} itemClick={this.itemClick} />
      </div>
    );
  }
}

export default App;

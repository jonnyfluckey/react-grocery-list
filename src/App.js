import React, { Component } from 'react';
import GroceryList from './grocery-list/GroceryList';
import ItemForm from './grocery-list/ItemForm';
import { Container, Menu, Icon } from 'semantic-ui-react';

class App extends Component {

  state = {
    items: [
      { id: 1, name: "apples", price: 1.00, complete: false },
      { id: 2, name: "bananas", price: 1.25, complete: false },
      { id: 3, name: "lettuce", price: 1.50, complete: false }
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
        return item
      })
    })
  }


  render() {
    const { items, } = this.state
    return (
      <Container>
      <Menu inverted>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>View Cart</Menu.Item>
        <Menu.Item><Icon name="shopping cart" />Checkout</Menu.Item>
      </Menu>
     
     
        <GroceryList name="grocery list" items={items} itemClick={this.itemClick} />
        <br></br>
        <br></br>
        <h2>Add an Item:</h2>
        <br></br>
        <br></br>
        <ItemForm addItem={this.addItem} />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GroceryList from './grocery-list/GroceryList'


class App extends Component {

  state = {
    items: [
      { id: 1, name: "apples", price: 1.00, complete: false },
      { id: 1, name: "bananas", price: 1.25, complete: false },
      { id: 1, name: "lettuce", price: 1.50, complete: false }
    ]
  }

  itemClick = () => {


  }


  render() {
    return (
      <div>
        <GroceryList name="grocery list" items={this.state.items} itemClick={this.itemClick} />
        
      </div>
    );
  }
}

export default App;

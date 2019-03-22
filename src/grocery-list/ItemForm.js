import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';

// Logical component

class ItemForm extends Component {

  state = { name: '', price: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({name: '', price: '' })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }


render() {
  const {name, price} = this.state
  return (
    <form onSubmit={this.handleSubmit}>
      <input
        required
        placeholder="name"
        value={name}
        name="name"
        onChange={this.handleChange}
      />
      <br></br>
      <input
        required
        placeholder="price"
        value={price}
        name="price"
        onChange={this.handleChange}
      />
      <br></br>
      <br></br>
      <Button type="submit" animated>
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </form>
  )
}

}

export default ItemForm

import React, {Component} from 'react';

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
      <input
        required
        placeholder="price"
        value={price}
        name="price"
        onChange={this.handleChange}
      />
      <input type="submit" value="Submit"></input>
    </form>
  )
}

}

export default ItemForm

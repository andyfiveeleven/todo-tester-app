import React from 'react';

class TodoCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //about mutable data
      title: '',
      urgency: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleToDoCreate(this.state); //this method will be on a parent, cause it's on props
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='new todo'
        />

        <input
          name='urgency'
          type='text'
          value={this.state.urgency}
          onChange={this.handleChange}
          placeholder='urgency'
        />

        <button type='submit'>Add ToDo</button>
      </form>
    )
  }
}

export default TodoCreateForm

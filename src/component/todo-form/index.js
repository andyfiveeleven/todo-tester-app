import React from 'react'
import './_todo-form.scss'

class TodoForm extends React.Component{
  constructor(props){
    super(props);

    let title = props.todo ? props.todo.title : '';
    let urgency = props.todo ? props.todo.urgency : '';

    this.state = { title, urgency };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name, value, type} = e.target

    if (type === 'number') { //type is the type of the field
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch (err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]:value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state); //this is gonna be on a parent, we'll get it later.
  }

  render() {
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          placeholder='todo title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          name='urgency'
          placeholder='urgency'
          type='text'
          value={this.state.urgency}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    )
  }
}

export default TodoForm

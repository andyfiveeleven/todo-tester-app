import React from 'react';
import uuid from 'uuid/v1';

import TodoCreateForm from '../todo-create-form';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
    this.todoCreate=this.todoCreate.bind(this);
  }

  todoCreate(todo){
    todo.id = uuid();
    this.props.app.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }

  render(){
    return(
      <div className='dashboard-container'>
        <TodoCreateForm handleToDoCreate={this.todoCreate}/>
      </div>
    )
  }
}

export default DashboardContainer;

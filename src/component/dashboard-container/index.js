import React from 'react';
import uuid from 'uuid/v1';

import Modal from '../modal';
import NavBar from '../navbar';
import TodoList from '../todo-list';
import TodoForm from '../todo-form';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    showErrors: true}
    }

    this.todoCreate = this.todoCreate.bind(this);
    this.todoRemove = this.todoRemove.bind(this);
    this.todoUpdate = this.todoUpdate.bind(this);
  }

  todoCreate(todo){
    todo.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      todos: prevState.todos.concat([todo])
    }));
  }

  todoRemove(todo){
    let {app} = this.props;
    app.setState(prevState => ({
      todos: prevState.todos.filter((item) => {
        return item.id !== todos.id
      })
    }))
  }

  todoUpdate(todo){
    let {app} = this.props;
    app.setState(prevState => ({
      todos: prevState.todos.map((item) => {
        return item.id === todos.id ? expense: item;
      })
    }));
  }

  render(){
    let {app} = this.props;

    let todosLeft = app.state.todos.length

    console.log('__STATE__: ', app.state);

    return (
      <section className='dashboard'>
        <Navbar />

        <div>
          <p> todos left: {todosLeft}</p>
        </div>

        <TodoForm
          handleSubmit={this.todoCreate}
          submitTitle='add todo'
        ?>

        {renderIf(todosLeft < 15 && this.state.showErrors,
          <Modal close={() => this.setState({showErrors: false})}>
            <h1> you have too much left to accomplish </h1>
          </Modal>
        )}
      </section>
    )
  }
}

export default DashboardContainer;

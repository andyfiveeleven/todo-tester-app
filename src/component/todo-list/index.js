import React from 'react';
import TodoCreateForm from '../todo-create-form';

class TodoList extends React.Component{
  render(){
    return(
      <section className='expense-list'>
        <ul>
          {this.props.todos.map((item, i) =>
            <li key={i}>
              <div>
                <p>title: {item.title}</p>
                <p>urgency: {item.urgency}</p>
              </div>

              <TodoCreateForm
                todo={item}
                submitTitle='update todo'
                handleSubmit={(todo) => {
                  todo.id = item.id;
                  this.props.todoUpdate(expense);
                }}
                />
            </li>
        )}
        </ul
      </section>
    )
  }
}

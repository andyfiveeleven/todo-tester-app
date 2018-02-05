import React from 'react';
import TodoForm from '../todo-form';

class TodoList extends React.Component{
  render(){
    return(
      <section className='todo-list'>
        <ul>
          {this.props.todos.map((item, i) =>
            <li key={i}>
              <button onClick={() => this.props.todoRemove(item)}>x</button>
              <div>
                <p>title: {item.title}</p>
                <p>urgency: {item.urgency}</p>
              </div>

              <TodoForm
                todo={item}
                submitTitle='update todo'
                handleSubmit={(todo) => {
                  todo.id = item.id;
                  this.props.todoUpdate(expense);
                }}
                />
            </li>
        )}
        </ul>
      </section>
    )
  }
}

export defalt TodoList 

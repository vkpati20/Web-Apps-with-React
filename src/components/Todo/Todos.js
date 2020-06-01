import React from 'react';
import TodoItem from './Todoitem';

import PropTypes from 'prop-types';

 class Todos extends React.Component{



  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkBox={this.props.checkBox} delTodo={this.props.delTodo}/>
    ));
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    checkBox: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
    
}

export default Todos;

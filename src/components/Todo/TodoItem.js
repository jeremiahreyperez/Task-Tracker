import React, { Component } from 'react';
import TodoDetails from './TodoDetails';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
      <div style={todoStyle}>
        <TodoDetails
          todo={this.props.todo}
          toggleComplete={this.props.toggleComplete}
          deleteTodo={this.props.deleteTodo}
        />
        <button
          onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}
          style={btnStyle}
        >
          Delete
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const todoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  background: '#f4f4f4',
  borderBottom: '1px #ccc dotted',
  fontSize: 18
};

const btnStyle = {
  fontSize: 18,
  width: 100,
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  margin: '0px'
};

export default TodoItem;

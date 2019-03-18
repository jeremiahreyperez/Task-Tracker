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
          X
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
  padding: '10px',
  borderBottom: '1px #ccc dotted'
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '0px 10px',
  borderRadius: '30%',
  cursor: 'pointer',
  margin: '0px'
};

export default TodoItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoDetails extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      opacity: this.props.todo.completed ? '.3' : '1'
    };
  };

  getBoxStyle = () => {
    return {
      display: 'inline-block',
      height: '12px',
      width: '12px',
      border: '1px #ccc solid',
      borderRadius: '50%',
      background: this.props.todo.completed ? '#333' : '#fff',
      marginRight: '10px'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <div style={this.getBoxStyle()} />
        <input
          style={checkboxStyle}
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        {title}
      </div>
    );
  }
}

TodoDetails.propTypes = {
  todo: PropTypes.object.isRequired
};

const checkboxStyle = {
  height: '14px',
  width: '14px',
  opacity: '0',
  position: 'absolute',
  marginLeft: '-23px',
  marginTop: '3px',
  cursor: 'pointer'
};

export default TodoDetails;

import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: 'flex'
        }}
      >
        <input
          type="text"
          name="title"
          style={{
            flex: 1,
            height: 50,
            fontSize: 18
          }}
          placeholder="  Add Task..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{
            width: 100,
            height: 50,
            fontSize: 18
          }}
        />
      </form>
    );
  }
}

export default AddTodo;

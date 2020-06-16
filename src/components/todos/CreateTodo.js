import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    todo: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ todo: "" });
  };

  render() {
    {
      console.log(this.props);
    }
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label htmlFor="todo">Add Todo</label>
            <input
              type="text"
              name="todo"
              onChange={this.handleOnChange}
              value={this.state.todo}
            />
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: "ADD_TODO", payload: todo }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);

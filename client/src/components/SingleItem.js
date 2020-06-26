import React, { Component } from 'react';
import axios from 'axios';
import TodoCard from './TodoCard';

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      todo: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/todo/${id}`).then((response) => {
      this.setState({
        loading: false,
        todo: response.data,
      });
    });
  }
  render() {
    if (this.loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <TodoCard
        title={this.state.todo.title}
        isDone={this.state.todo.is_done}
        id={this.state.todo.id}
      />
    );
  }
}

export default SingleItem;

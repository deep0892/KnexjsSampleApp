import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import ListItems from './ListItems';
import ListItem from './ListItem';

class ItemsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      todos: [],
    };
  }
  componentDidMount() {
    axios.get('/api/todo').then((response) => {
      this.setState({
        loading: false,
        todos: response.data,
      });
    });
  }

  renderTodos() {
    return _.map(this.state.todos, (todo) => {
      return (
        <ListItem title={todo.title} isDone={todo.is_done} key={todo.id} />
      );
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return <ListItems> {this.renderTodos()}</ListItems>;
  }
}

export default ItemsBody;

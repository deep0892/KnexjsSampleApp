import React, { Component } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';

class ItemsBody extends Component {
  render() {
    return (
      <ListItems>
        <ListItem text="Hello!" />
      </ListItems>
    );
  }
}

export default ItemsBody;

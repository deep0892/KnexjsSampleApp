import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import SingleItem from './SingleItem';
import CreateTodo from './CreateTodo';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <TopNav />
            <div className="container">
              <Switch>
                <Route path="/new" component={CreateTodo} />
                <Route path="/:id" component={SingleItem} />
                <Route path="/" exact component={ItemsBody} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

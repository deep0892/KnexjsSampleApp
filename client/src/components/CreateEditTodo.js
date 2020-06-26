import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class CreateEditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      isDone: props.isDone || false,
    };
    this.onChangeItem = this.onChangeItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeItem(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, isDone } = this.state;
    const { id, history } = this.props;
    if (id) {
      axios
        .put(`/api/todo/${id}`, {
          title: title,
          is_done: isDone === 'true',
        })
        .then(() => {
          this.props.updateState(title, isDone === 'true');
          this.props.toggleEdit();
        });
    } else {
      axios
        .post('/api/todo', {
          title: title,
          is_done: isDone === 'true',
        })
        .then(() => {
          history.push('/');
        });
    }
  }

  render() {
    const { title, isDone } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title of todo</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={title}
            onChange={this.onChangeItem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isDone">Todo completed</label>
          <select
            name="isDone"
            className="form-control"
            id="title"
            value={isDone}
            onChange={this.onChangeItem}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.toggleEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CreateEditTodo);

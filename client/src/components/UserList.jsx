import React, { Component } from 'react';
import User from './User.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <div className="user--container headers">
          <h3>User Component</h3>
        </div>
        <div>
          <User />
        </div>
      </div>
    )
  }
}

export default UserList;


import React, { Component } from 'react';
class User extends Component {
  render() {
    return (
      <li
        class="list-group-item"
        style={{
          height: 80
        }}
      >
        <div
          style={{
            flexDirection: 'row'
          }}
        >
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src={this.props.avatar} height="48" width="48" />
          </div>
          <div class="col-sm-8 col-md-8 col-lg-8">
            <a>{this.props.userName}</a>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <button>Follow</button>
          </div>
        </div>
      </li>
    );
  }
}

export default User;

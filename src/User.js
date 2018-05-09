import React, { Component } from 'react';
class User extends Component {
  render() {
    return (
      <li
        class="w3-bar w3-display-container"
        style={{
          height: 80
        }}
      >
        <img
          src={this.props.avatar}
          class="w3-bar-item w3-circle"
          style={{ width: 85 }}
        />
        <div class="w3-bar-item w3-display-center">
          <span class="w3-large">{this.props.userName}</span>
          <br />
          <span>{this.props.userName}</span>
        </div>
        <button class="btn btn-default  w3-display-right" style={{ right: 16 }}>
          Follow
        </button>
      </li>
    );
  }
}

export default User;

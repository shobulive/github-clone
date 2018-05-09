import React, { Component } from 'react';
import logo from './Assets/user.png';
import GitLogo from './Assets/git-logo.png';
import './App.css';
import { connect } from 'react-redux';
import { fetchAllUsers } from './Actions';
import User from './User';
class App extends Component {
  _getNextUsers() {
    this.props.fetchAllUsers(this.props.nextStartID);
  }
  componentWillMount() {
    this._getNextUsers();
  }
  _renderUsers() {
    let users = [];
    this.props.users.forEach((user, index) => {
      users.push(<User avatar={user.avatar_url} userName={user.login} />);
    });
    return users;
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-inverse" style={{ backgroundColor: '#333' }}>
          <div>
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  height="40"
                  width="40"
                  style={{ marginTop: -10 }}
                />
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li>
                <input
                  class="form-control"
                  style={{
                    marginTop: 8,
                    backgroundColor: '#444',
                    borderColor: '#444',
                    fontWeight: 'bold'
                  }}
                  placeholder="Search Github"
                />
              </li>
              <li>
                <a style={{ fontWeight: 'bold' }}>Pull requests</a>
              </li>
              <li>
                <a style={{ fontWeight: 'bold' }}>Issues</a>
              </li>
              <li>
                <a style={{ fontWeight: 'bold' }}>Marketplace</a>
              </li>
              <li>
                <a style={{ fontWeight: 'bold' }}>Explore</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-plus" />{' '}
                  <span class="glyphicon glyphicon-menu-down" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-user" />
                  <span class="glyphicon glyphicon-menu-down" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ padding: 16 }}>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-search" />
            </span>
            <input
              class="form-control"
              placeholder={'Find a member...'}
              style={{
                backgroundColor: '#eeeeef',
                width: 300
              }}
            />
          </div>
          <ul
            class="w3-ul"
            style={{
              marginBottom: 16,
              marginTop: 16,
              borderTopWidth: 0.5,
              borderTopStyle: 'solid',
              borderTopColor: '#ccc',
              borderBottomWidth: 0.5,
              borderBottomStyle: 'solid',
              borderBottomColor: '#ccc'
            }}
          >
            {this.props.users.length > 0 && this._renderUsers()}
          </ul>
          <button class="btn btn-default" onClick={() => this._getNextUsers()}>
            Next<span class="glyphicon glyphicon-menu-right" />
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: lastID => dispatch(fetchAllUsers(lastID))
  };
};
const mapStateToProps = state => {
  console.log(state, 'state');
  return {
    users: state.fetchAllUsers.users,
    nextStartID: state.fetchAllUsers.nextStartID
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

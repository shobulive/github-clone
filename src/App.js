import React, { Component } from 'react';
// import logo from './logo.svg';
import GitLogo from './Assets/git-logo.png';
import './App.css';
import { connect } from 'react-redux';
import { fetchAllUsers } from './Actions';
import User from './User';
class App extends Component {
  _getNextUsers() {
    this.props.fetchAllUsers(this.props.lastID);
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
    console.log(this.props.users);
    return (
      <div className="App">
        <nav class="navbar navbar-inverse" style={{ backgroundColor: '#333' }}>
          <div class="container">
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
              <li class="active">
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
              <li>
                <a style={{ fontWeight: 'bold' }}>+</a>
              </li>
              <li>
                <a style={{ fontWeight: 'bold' }}>Explore</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container">
          <input
            class="form-control"
            placeholder={'Find a member...'}
            style={{ backgroundColor: '#eeeeef' }}
          />
          <ul class="list-group">
            {this.props.users.length > 0 && this._renderUsers()}
          </ul>
          <button onClick={() => this._getNextUsers()}>Next</button>
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
  console.log(state);
  return {
    users: state.fetchAllUsers.users,
    lastID: state.fetchAllUsers.lastUserID
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import {
  FETCH_ALL_USERS,
  FETCH_USER_REPOS,
  FETCH_USER_WITH_ID,
  SEARCH_USERS
} from './actionTypes.js';
export function fetchAllUsers(nextStartID) {
  return async (dispatch, getState) => {
    await fetch(`https://api.github.com/users?since=${nextStartID}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: FETCH_ALL_USERS,
          payload: data
        });
      });
  };
}
export function searchUsers(text) {
  return (dispatch, getState) => {
    fetch(`https://api.github.com/search/users?q=${text}+in:login`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: SEARCH_USERS,
          payload: data
        });
      });
  };
}
export function fetchUser(ID) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_USER_WITH_ID,
      payload: { ID }
    });
  };
}
export function fetchUserRepos(ID) {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_USER_REPOS,
      payload: { ID }
    });
  };
}

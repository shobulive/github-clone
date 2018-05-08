import { FETCH_USER_REPOS } from '../Actions/actionTypes';
const initialState = { repos: [] };
export default function fetchUserRepos(state = initialState, action) {
  if (action.type === FETCH_USER_REPOS) {
    return { userRepos: action.payload };
  } else return { ...state };
}

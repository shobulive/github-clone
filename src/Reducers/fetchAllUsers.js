import { FETCH_ALL_USERS } from '../Actions/actionTypes';
const initialState = { users: [], lastUserID: 0 };
export default function fetchAllUsers(state = initialState, action) {
  if (action.type === FETCH_ALL_USERS) {
    return {
      ...state,
      users: action.payload,
      lastUserID: action.payload[action.payload.length - 1].id
    };
  } else return { ...state };
}

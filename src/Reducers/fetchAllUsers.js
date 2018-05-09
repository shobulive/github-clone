import { FETCH_ALL_USERS } from '../Actions/actionTypes';
const initialState = {
  users: [],
  nextStartID: 0
};
export default function fetchAllUsers(state = initialState, action) {
  if (action.type === FETCH_ALL_USERS) {
    return {
      ...state,
      users: action.payload,
      nextStartID: action.payload[action.payload.length - 1].id
    };
  } else return { ...state };
}

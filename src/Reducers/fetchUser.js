import { FETCH_USER_WITH_ID } from '../Actions/actionTypes';
const initialState = { currentUser: undefined };
export default function fetchUser(state = initialState, action) {
  if (action.type === FETCH_USER_WITH_ID) {
    return { currentUser: action.payload };
  } else return { ...state };
}

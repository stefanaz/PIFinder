import { ADD_DOT, REMOVE_DOTS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_DOT:
      return [...state, payload];
    case REMOVE_DOTS:
      return [];
    default:
      return state;
  }
}

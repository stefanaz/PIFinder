import { ADD_DOT, REMOVE_DOTS } from "./types";

export const setDot = dot => dispatch => {
  dispatch({
    type: ADD_DOT,
    payload: dot
  });
};

export const removeDots = () => dispatch => {
  dispatch({
    type: REMOVE_DOTS,
    payload: []
  });
};

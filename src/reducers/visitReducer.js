import * as types from "../actions/types";

const initialState = {};

export default function visitReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_VISIT_INIT: {
      return { ...state, loading: true, error: null };
    }
    case types.GET_VISIT_SUCCESS: {
      return { ...state, loading: false, error: null, ...action.payload };
    }
    case types.GET_VISIT_FAILED: {
      return {
        ...state,
        loading: false,
        error:
          action.payload && action.payload.message
            ? action.payload.message
            : "Something went wrong.",
      };
    }
    default:
      return state;
  }
}

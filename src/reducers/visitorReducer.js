import * as types from "../actions/types";

const initialState = {};

export default function visitorReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_VISITOR: {
      return { ...state, ...action.payload };
    }
    case types.CLEAR_VISITOR: {
      return initialState;
    }
    case types.SUBMIT_VISIT_INIT: {
      return { ...state, loading: true, error: null };
    }
    case types.SUBMIT_VISIT_SUCCESS: {
      return { ...state, loading: false, error: null };
    }
    case types.SUBMIT_VISIT_FAILED: {
      return {
        ...state,
        loading: false,
        error:
          action.payload && action.payload.message
            ? action.payload.message
            : "Something went wrong.",
      };
    }
    case types.GET_VISIT_INIT: {
      return { ...state, loading: true, error: null };
    }
    case types.GET_VISIT_SUCCESS: {
      return { ...state, loading: false, error: null, visit: action.payload };
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

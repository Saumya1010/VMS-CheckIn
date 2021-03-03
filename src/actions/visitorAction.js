import axios from "axios";
import * as types from "./types";
import { API_URL } from "../constants";

export const setVisitor = (data) => {
  return {
    type: types.SET_VISITOR,
    payload: data,
  };
};

export const submitVisit = (data = {}) => {
  return (dispatch, getState) => {
    const { visitor } = getState();
    console.log("state in action: ", visitor);
    dispatch({
      type: types.SUBMIT_VISIT_INIT,
    });

    axios
      .post("http://localhost:3000/visit", visitor, {})
      .then((response) => {
        console.log({ response });
        dispatch({
          type: types.SUBMIT_VISIT_SUCCESS,
          payload: response,
        });
      })
      .catch((err) => {
        console.log({ err });
        dispatch({
          type: types.SUBMIT_VISIT_FAILED,
          payload: err,
        });
      });
  };
};

export const getVisit = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.GET_VISIT_INIT,
    });

    axios
      .get(`http://localhost:3000/visits/${id}`)
      .then((response) => {
        console.log({ response });
        dispatch({
          type: types.GET_VISIT_SUCCESS,
          payload: response.data.visit,
        });
      })
      .catch((err) => {
        console.log({ err });
        dispatch({
          type: types.GET_VISIT_FAILED,
          payload: err,
        });
      });
  };
};

export const clearVisitor = () => {
  return {
    type: types.CLEAR_VISITOR,
  };
};

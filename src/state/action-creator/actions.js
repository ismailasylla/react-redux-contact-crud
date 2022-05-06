import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const deleteUser = () => ({
  type: types.DELETE_USERS,
});

const apiUrl = "http://localhost:5002/user";

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${apiUrl}`)
      .then((res) => {
        console.log("resp", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};
export const onDeleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${apiUrl}/${id}`)
      .then((res) => {
        console.log("response", res);
        dispatch(deleteUser());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

// .get(`${process.env.REACT_APP_API}`)

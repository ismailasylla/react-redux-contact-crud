import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const deleteUser = () => ({
  type: types.DELETE_USERS,
});

const onAddUser = () => ({
  type: types.ADD_USER,
});

const apiUrl = "http://localhost:5002/user";

// @GET All Users
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

// @Delete a single user
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

// @Add user to the list
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${apiUrl}`, user)
      .then((res) => {
        console.log("response", res);
        dispatch(onAddUser());
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

// todo implements env
// .get(`${process.env.REACT_APP_API}`)

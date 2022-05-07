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
const onGetUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

// @TODO
// @Api Url, to be called from the env file...

const apiUrl = "http://localhost:5002/user";

// @GET All Users
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${apiUrl}`)
      .then((res) => {
        console.log("Fetching all users", res);
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
        console.log("Calling Delete", res);
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
        console.log("Adding...", res);
        dispatch(onAddUser());
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

// @Get user by id
// Edit
export const getUserByid = (id) => {
  return function (dispatch) {
    axios
      .get(`${apiUrl}/${id}`)
      .then((res) => {
        console.log("Edit call", res);
        dispatch(onGetUser(res.data));
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

// todo implements env
// .get(`${process.env.REACT_APP_API}`)

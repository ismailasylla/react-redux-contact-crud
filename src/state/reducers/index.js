import { combineReducers } from "@reduxjs/toolkit";
import usersReducers from "./usersReducers";

const reducers = combineReducers({
  users: usersReducers,
});

export default reducers;

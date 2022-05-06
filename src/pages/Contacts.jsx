import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../state/action-creator/actions";
import Button from "@mui/material/Button";

function createData(
  name: string,
  email: string,
  contact: number,
  Address: string
) {
  return { name, email, contact, Address };
}

const rows = [
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
];

const Contacts = () => {
  let dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.contact}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Contacts;

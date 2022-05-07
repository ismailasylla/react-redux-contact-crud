import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUserForm from "./pages/AddUserForm";
import Users from "./pages/Users";
import EditUser from "./pages/EditUserForm";
import Home from "./pages/Home";
import { Container } from "@mui/material";

function App() {
  return (
    <Container fixed>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Users />} />
        <Route path="addUser" element={<AddUserForm />} />
        <Route path="editUser/:id" element={<EditUser />} />
      </Routes>
    </Container>
  );
}

export default App;

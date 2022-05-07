import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUserForm from "./pages/AddUserForm";
import Users from "./pages/Users";
import EditUser from "./pages/EditUserForm";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Users />} />
        <Route path="addUser" element={<AddUserForm />} />
        <Route path="editUser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

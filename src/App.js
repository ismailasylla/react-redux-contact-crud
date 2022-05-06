import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUserForm from "./pages/AddUserForm";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="addUser" element={<AddUserForm />} />
      </Routes>
    </div>
  );
}

export default App;

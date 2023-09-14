import React from "react";
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Users from './components/UserList';
import EditUser from "./components/EditUser";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<Users />} />
          <Route path='/info/:id' element={<EditUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTodos from "./Pages/AddTodos";
import GoogleLogin from "./Pages/GoogleLogin";
import Home from "./Pages/Home";
import RequiredAuth from "./Pages/RequireAuth";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/add-todos"
          element={
            <RequiredAuth>
              <AddTodos></AddTodos>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<GoogleLogin></GoogleLogin>}></Route>
      </Routes>
    </div>
  );
};

export default App;

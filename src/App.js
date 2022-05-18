import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTodos from './Pages/AddTodos';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
   <Navbar />
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/add-todos" element={<AddTodos></AddTodos>}></Route>
</Routes>
    </div>
  );
};

export default App;
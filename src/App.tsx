import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import UserPage from "./Page/UserPage";
import TodosPage from "./Page/TodosPage";
import UserItemPage from "./Page/UserItemPage";
import TodosItemPage from "./Page/TodosItemPage";

function App() {

  return (
    <BrowserRouter>
      <div>
          <NavLink to="users">Users</NavLink>
          <NavLink to="todos">Todos</NavLink>
      </div>
      <Routes>
        <Route path={'/users'} element={<UserPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/todos/:id'} element={<TodosItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

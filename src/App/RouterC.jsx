import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "Auth/Login";
import CheckIsLogged from "./CheckIsLogged";
import Project from "Project";
import ProtectRoute from "./ProtectedRoute";
import Register from "Auth/Register";
import ProjectList from "Project/ProjectList";

const RouterC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<CheckIsLogged />}>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
      {/* <Route path='*' element={<PageError />} /> */}
      <Route path="/" element={<Navigate to="/project" />} />
      <Route element={<ProtectRoute />}>
        <Route path="/project" element={<Project />}>
          <Route index element={<ProjectList />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterC;

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CheckIsLogged from "./CheckIsLogged";
import ProtectRoute from "./ProtectedRoute";
import { PageLoader } from "shared/components";

const Loader = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <PageLoader />
      }
    >
      <Component {...props} />
    </Suspense>
  );

const Login  = Loader(lazy(() => import("Auth/Login")));
const Project  = Loader(lazy(() => import("Project")));
const Register  = Loader(lazy(() => import("Auth/Register")));
const ProjectList  = Loader(lazy(() => import("Project/ProjectList")));
const ProjectBoard  = Loader(lazy(() => import("Project/Board")));



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
          <Route path=":id/board" element={<ProjectBoard />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterC;

import NavbarLeft from './NavbarLeft';
import { ProjectContainer } from "./Styles";

import { Outlet } from "react-router-dom";

export default function Project() {

  return (
    <ProjectContainer>
      <NavbarLeft />
      <Outlet />
    </ProjectContainer>
  );
}
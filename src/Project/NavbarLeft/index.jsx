import React from "react";
import PropTypes from "prop-types";

import { Icon, AboutTooltip } from "shared/components";

import {
  NavLeft,
  LogoLink,
  StyledLogo,
  Bottom,
  Item,
  ItemText,
} from "./Styles";

const ProjectNavbarLeft = () => (
  <NavLeft>
    <LogoLink>
      <Item>
        <Icon type="page" size={27} />
        <ItemText>Projects</ItemText>
      </Item>
    </LogoLink>

    <Bottom>
      <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={(linkProps) => (
          <Item {...linkProps}>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      />
    </Bottom>
  </NavLeft>
);

export default ProjectNavbarLeft;

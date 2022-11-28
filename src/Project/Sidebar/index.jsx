import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon, ProjectAvatar } from 'shared/components';
import { ProjectCategoryCopy } from 'shared/constants/projects';

import {
  LinkItem,
  LinkText, ProjectCategory, ProjectInfo, ProjectName, ProjectTexts, Sidebar
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSidebar = ({ project }) => {

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{project.name}</ProjectName>
          <ProjectCategory>{ProjectCategoryCopy[project.category]} project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem('/project', 'Dashboard', 'board', '/board')}
      {renderLinkItem('/project', 'Project settings', 'settings', '/settings')}
    </Sidebar>
  );
};

const renderLinkItem = (match, text, iconType, path) => {

  const linkItemProps = { as: NavLink, to: `${match}${path}` }

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
    </LinkItem>
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;

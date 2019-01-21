import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

export const Header = ({ isAuthenticated, changeAuth }) => {
  return (
    <Menu inverted fixed="top" size="large">
      <Menu.Item onClick={changeAuth}>{isAuthenticated ? 'Log out': 'Log in'}</Menu.Item>
    </Menu>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  changeAuth: PropTypes.func.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

export const Header = ({ logout, navigate, auth }) => {
  return (
    <Menu color='teal' inverted fixed="top" size="large">
      {!auth.user.token ? (
        <Menu.Item onClick={() => navigate('/login')}>Log in</Menu.Item>
      ) : (
        <Menu.Item onClick={() => logout()}>Log out</Menu.Item>
      )
    }
    </Menu>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

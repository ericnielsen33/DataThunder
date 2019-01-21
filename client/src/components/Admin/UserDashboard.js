import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {  } from '../../containers/hasOrg';
import UserTable from '../Base/UserTable';
import { Container } from 'semantic-ui-react';

const users = [
  {
    _id: "f9834fjh49",
    username: "ericnielsen",
    firstName: "Eric",
    lastName: "Nielsen"
  },
  {
    _id: "f9834fjh56",
    username: "danfer",
    firstName: "Dan",
    lastName: "Fer"
  }
];

export default class UserDashboard extends Component {

  render() {
    return <div className="user-dashboard">
        <Container>
          <UserTable users={users} />
        </Container>
      </div>;
  }
}

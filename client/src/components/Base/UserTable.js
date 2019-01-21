import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import UserTableRow from "./UserTableRow";


export default class UserList extends Component {
  constructor (props){
    super(props)
    this.renderRows = this.renderRows.bind(this);
  }
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
      })
    )
  };
  renderRows() {
    return this.props.users.map(user => {
      return <UserTableRow key={user._id} user={user} />;
    });
  }

  render() {
    const headers = ["_id", "username", "first name", "last name"].map(
      header => {
        return <Table.HeaderCell key={header} children={header} />;
      }
    );
    return (
      <Table selectable>
        <Table.Header>
          <Table.Row cells={headers} />
        </Table.Header>
        <Table.Body>{this.renderRows()}</Table.Body>
      </Table>
    );
  }
}

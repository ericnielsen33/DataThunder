import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

export default class UserTableRow extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    })
  };

  render() {
    const { user } = this.props;
    return (
      <Table.Row>
        <Table.Cell content={user._id} />
        <Table.Cell content={user.username} />
        <Table.Cell content={user.firstName} />
        <Table.Cell content={user.lastName} />
      </Table.Row>
    );
  }
}

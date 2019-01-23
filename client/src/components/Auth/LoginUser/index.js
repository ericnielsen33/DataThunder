import "./loginUser.css";
import React, { Component } from "react";
import { Form, Grid, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/auth";

class LoginUser extends Component {
  state = {
    username: "",
    password: ""
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.changeAuth(!this.props.auth.isAuthenticated);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="auth-login">
        <Grid centered container textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Grid.Row>
              <Header size="medium" dividing textAlign="center">
                Login
              </Header>
            </Grid.Row>
            <Grid.Row>
              <Form onSubmit={event => this.handleFormSubmit(event)}>
                <Form.Input
                  name="username"
                  onChange={this.onInputChange}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="username"
                />
                <Form.Input
                  name="password"
                  onChange={this.onInputChange}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="password"
                  type="password"
                />
                <Grid.Row className="login-button">
                  <Form.Button type="submit" color="teal" fluid size="large">
                    Login
                  </Form.Button>
                </Grid.Row>
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(
  mapStateToProps,
  actions
)(withRouter(LoginUser));

import './App.css';
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/auth";
import { Header } from "../Header";
import UserDashboard from '../Admin/UserDashboard';
import LoginUser from '../Auth/LoginUser';

const adminDashboard = () => {
  return (<h2>admin dashboard</h2>)}
const orgAdminDashboard = () => {
  return (<h2>org admin dashboard</h2>)
}
const Home = () => {
  return <h2>Home</h2>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.changeAuth = this.changeAuth.bind(this);
  }
  changeAuth() {
    this.props.changeAuth(!this.props.auth.isAuthenticated);
  }
  render() {
    return <div className="app">
      <Header className="app-header" changeAuth={this.changeAuth} isAuthenticated={this.props.auth.isAuthenticated} />
        <div className="app-content">
          <Switch>
            <Route exact path='/login' component={LoginUser} />
            {/* Routes pertaining to the user role, ADMIN*/}
            <Route exact path='/' component={Home} />
            <Route exact path='/admin/users' component={UserDashboard} />
            <Route exact path='/admin/roles' component={UserDashboard} />
            <Route exact path='/organizations' component={adminDashboard} />
            <Route exact path='/organizations/new' component={adminDashboard} />
            {/* Routes pertaining to the user role,  ORG_ADMIN */}
            <Route exact path='/organizations/:id' component={orgAdminDashboard} />
            <Route exact path='/organizations/:id/users' component={orgAdminDashboard} />
            <Route exact path='/organizations/:id/locations' component={orgAdminDashboard} />
            <Route exact path='/organizations/:id/teams' component={orgAdminDashboard} />
            {/* Routes pertaining to the user role, RESIDENT */}
            <Route exact path='/residents/dashboard' component={orgAdminDashboard} />
            <Route exact path='/residents/:id/patients' component={orgAdminDashboard} />
            {/* Routes pertaining to the user role, SCHEDULER */}
          </Switch>
        </div>
      </div>;
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(App);

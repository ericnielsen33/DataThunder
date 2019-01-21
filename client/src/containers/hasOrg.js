import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actions/org';

export const hasOrg = ChildComponent => {
  const mapStateToProps = state => ({
    org: state.org
  });
  class HasOrg extends Component {
    componentDidMount(){}
    render(){
      return <ChildComponent {...this.props} />
    }
  }
  return connect(mapStateToProps, actions)(HasOrg)
};

import React, { Component } from "react";
import PropTypes from "prop-types";

export class Hoverable extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
  state = { hovering: false };
  mouseOver = () => this.setState({ hovering: true });
  mouseOut = () => this.setState({ hovering: false });

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}

import React, { Component } from "react";
import Menu from "./Menu";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menuVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.menuVisible
      ? this.setState({ menuVisible: false })
      : this.setState({ menuVisible: true });
  }

  render() {
    return (
      <nav className="display-f direction-c justify-c align-sb bg-l border-r-lg shadow">
        <div className="display-f justify-sa t-justify-sb padding-tb-lg padding-lr-md t-padding-tb-md t-padding-lr-lg align-c">
          <a href="/" className="width-p-xmd t-width-p-md">
            <img
              src="../../static/logo.svg"
              alt="logo"
              className="width-p-lg height-a"
            />
          </a>
          <div
            className="bg-p-d border-r-md display-f direction-c justify-c self-c align-c width-v-sm t-width-u height-v-sm t-height-u cursor-p grow"
            onClick={this.handleClick}
          >
            <img
              src="../../static/menu.svg"
              alt="menu"
              className="width-p-md height-a cursor-p"
              onClick={this.handleClick}
            />
          </div>
        </div>
        {this.state.menuVisible && <Menu />}
      </nav>
    );
  }
}

export default Nav;

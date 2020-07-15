import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="site-header sticky-top py-3 font-weight-bold border-bottom">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/Form">Sign up</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
//class="py-2 d-none d-md-inline-block"

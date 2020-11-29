import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <div className="header">
    <div className="container-row">
      <h1>Expensify</h1>
      <div className="menu">
        <NavLink
          to="/dashboard"
          activeClassName="is-active"
          exact={true}
          className="menu-item"
        >
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active" className="menu-item">
          Create
        </NavLink>
        <NavLink to="/help" activeClassName="is-active" className="menu-item">
          Help
        </NavLink>
        <button onClick={startLogout}>Logout</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return { startLogout: () => dispatch(startLogout()) };
};
export default connect(undefined, mapDispatchToProps)(Header);

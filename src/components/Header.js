import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard">
          <h1 className="header__title">Expensify</h1>
        </Link>
        <button onClick={startLogout} className="button button__link">
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => {
  return { startLogout: () => dispatch(startLogout()) };
};
export default connect(undefined, mapDispatchToProps)(Header);

// Higher Order Component - A component (HOC) that renders another component

import React from "react";
import ReactDOM from "react-dom";
const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

// Example 1

const withAdminInfo = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private Info. Please don't share!! </p>}
      {/* This is how you pass props from HOC to the wrapped component */}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminInfo(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="Hi Amir" />,
//   document.getElementById("app")
// );

// Example 2

const requireAuthentication = WrappedComponent => props =>
  props.isAuthenticated ? (
    <WrappedComponent {...props} />
  ) : (
    <div>You are not Authenticated. Please Login First!!</div>
  );

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Hi Amir" />,
  document.getElementById("app")
);

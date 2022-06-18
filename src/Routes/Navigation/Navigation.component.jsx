import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            <CrownLogo className="logo" />
          </Link>
          <Link to="/sign-in">SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

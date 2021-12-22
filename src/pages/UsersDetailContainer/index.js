import React from "react";

import { Link, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div className="content">
        <nav className="side-nav">
          <Link className="link" to="">
            User detail
          </Link>
          <Link className="link" to="update">
            User Update
          </Link>
        </nav>
        <h1>Users actions screen</h1>
        <Outlet />
      </div>
      <div className="aside"></div>
    </>
  );
}

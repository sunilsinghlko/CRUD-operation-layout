import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Menu() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow position-fixed w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="image/logoheader.png" height={40} width={40} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h2 className="navbar-brand text-secondary fw-bold pe-3" style={{ fontFamily: "poppins" }}>
            CODING SCHOOL
          </h2>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read">
                Read
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update/2">
                Update
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {isAuthenticated && <h6 className="text-success me-3">{user.name}</h6>}
            {isAuthenticated ? (
              <button
                className="btn btn-danger fw-bold rounded-pill"
                onClick={() => logout()}
              >
                LogOut
              </button>
            ) : (
              <button
                className="btn btn-success fw-bold rounded-pill"
                onClick={() => loginWithRedirect()}
              >
                Login/SignUp
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

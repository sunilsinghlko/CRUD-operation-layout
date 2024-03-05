import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Menu() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // console.log(user);
  return (
    <>
      <nav className="navbar position-fixed w-100 navbar-expand-lg bg-warning  fw-bold">
        <div className="container-fluid d-flex justify-content-evenly bg-warning">
          <Link className="navbar-brand" to="/">
            <img src="image/logoheader.png" height={40} width={40} alt=".." />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
          </div>
          <div>
            {isAuthenticated && <h6 className="text-success">{user.name} </h6>}
            {isAuthenticated ? (
              <button
                className="bg-danger text-white fw-bold rounded-pill"
                onClick={(e) => logout()}
              >
                LogOut
              </button>
            ) : (
              <button
                className="bg-success text-white fw-bold rounded-pill"
                onClick={(e) => loginWithRedirect()}
              >
                Login/SignUp
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;

// src/components/common/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="text-white text-decoration-none fs-4">
            MyApp
          </Link>

          <ul className="nav me-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
            <li><Link to="/recommend" className="nav-link px-2 text-white">Recommend</Link></li>
            <li><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
            <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
          </ul>

          <form className="col-lg-auto mb-3 mb-lg-0 me-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            {user ? (
              <>
                <span className="me-3">Hello, {user.username}</span>
                <button
                  className="btn btn-outline-light me-2"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => navigate("/register")}
                >
                  Sign-up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

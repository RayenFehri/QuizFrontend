import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { getCurrentUser, logout } from '../../Services/Auth/auth.service';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);


  const handleToggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };


  const user = getCurrentUser(); // Récupérer les données de l'utilisateur



  const handleLogout = async () => {
    try {
      await logout();
      console.log("User successfully logged out.");
      window.location.href = '/login'; // Redirection vers la page de connexion
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error logging out: ", error.message);
      } else {
        console.error("Unknown error occurred during logout.");
      }
    }
  };
  

  return (
    <nav className={`navbar navbar-top fixed-top navbar-expand ${darkMode ? 'navbar-dark' : 'navbar-dark'}`} id="navbarDefault">

      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <button
            className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarVerticalCollapse"
            aria-controls="navbarVerticalCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line" />
            </span>
          </button>
          <a className="navbar-brand me-1 me-sm-3" href="index-2.html">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  className="logo-text ms-0  d-sm-block"
                  src="assets/img/icons/finalLogo.png"
                  alt="phoenix"
                  width={20}
                />
                <img
                  className="logo-text ms-1  d-sm-block"
                  src="assets/img/icons/uizo.png"
                  alt="phoenix"
                  width={52}
                />
                <img
                  className="logo-text ms-0  d-sm-block"
                  src="assets/img/icons/fleche.png"
                  alt="phoenix"
                  width={20}
                />
              </div>
            </div>
          </a>
        </div>
    
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-icon-wait px-6">
              <input
                className="form-check-input ms-0 theme-control-toggle-input"
                type="checkbox"
                data-theme-control="phoenixTheme"
                defaultValue="dark"
                id="themeControlToggle"
              />
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch theme"
              >
                <span className="fas fa-sun" data-feather="sun" />

              </label>
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"  
                data-bs-placement="left"
                title="Switch theme"
              >
                <span className="fas fa-moon" data-feather="moon" />
              </label>
            </div>
          </li>
         
          
          <li className="nav-item dropdown">
        <a
          className="nav-link lh-1 pe-0"
          id="navbarDropdownUser"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="avatar avatar-l ">
            <img
              className="rounded-circle "
              src="assets/img/team/40x40/57.webp"
              alt=""
            />
          </div>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
          aria-labelledby="navbarDropdownUser"
        >
          <div className="card position-relative border-0">
            <div className="card-body p-0">
              <div className="text-center pt-4 pb-3">
                <div className="avatar avatar-xl ">
                  <img
                    className="rounded-circle "
                    src={"assets/img/team/72x72/57.webp"}
                    alt=""
                  />
                </div>
                <h6 className="mt-2 text-body-emphasis">{user.profile.firstname} {user.profile.lastname}</h6>
              </div>
              
            </div>
            <div  className="overflow-auto scrollbar"> 
            <hr />
              <ul className="nav d-flex flex-column mb-2 pb-1">
                <li className="nav-item">
                  <a className="nav-link px-3" href="/myProfile">
                    {" "}
                    <span className="me-2 text-body" data-feather="user" />
                    <span>Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    <span className="me-2 text-body" data-feather="pie-chart" />
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-footer p-0 border-top border-translucent">
              
              <hr />
              <div className="px-3">
                {" "}
                <Button
                  className="btn btn-phoenix-secondary d-flex flex-center w-100"
                  onClick={handleLogout}
                >
                  {" "}
                  <span className="me-2" data-feather="log-out">
                    {" "}
                  </span>
                  Sign out
                </Button>
              </div>
              <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                
              </div>
            </div>
          </div>
        </div>
      </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
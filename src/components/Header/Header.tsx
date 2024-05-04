import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import supabase from '../../Services/supabase/supabase.service';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { getCurrentUser, logout } from '../../Services/Auth/auth.service';



const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can apply further logic here to change the theme of your application
    // For example, you can update CSS classes or apply styles dynamically
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
<>
<nav className={`navbar navbar-top fixed-top navbar-expand ${darkMode ? 'dark-mode' : ''}`} id="navbarDefault">

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
      <a className="navbar-brand me-1 me-sm-3" href="index.html">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
          <img src={logo} alt="phoenix" width={27} />
          <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
          </div>
        </div>
      </a>
    </div>
    <div
      className="search-box navbar-top-search-box d-none d-lg-block"
      data-list='{"valueNames":["title"]}'
      style={{ width: "25rem" }}
    >
      <form
        className="position-relative"
        data-bs-toggle="search"
        data-bs-display="static"
      >
        <input
          className="form-control search-input fuzzy-search rounded-pill form-control-sm"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <span className="fas fa-search search-box-icon" />
      </form>
      <div
        className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
        data-bs-dismiss="search"
      >
        <button className="btn btn-link p-0" aria-label="Close" />
      </div>
   
    </div>
    <ul className="navbar-nav navbar-nav-icons flex-row">
      <li className="nav-item">
        <div className="theme-control-toggle fa-icon-wait px-2">
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
          <span className="icon"><i className="fas fa-moon"></i></span>
          </label>
          <label
            className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
            htmlFor="themeControlToggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Switch theme"
          >
          <span className="icon"><i className="fas fa-sun" ></i></span>

          </label>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          href="#"
          style={{ minWidth: "2.25rem" }}
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
        <span className="icon"><i className="fas fa-bell" style={{ height: 20, width: 20 }}></i></span>

        </a>
        <div
          className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
          id="navbarDropdownNotfication"
          aria-labelledby="navbarDropdownNotfication"
        >
 
        </div>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">
            <svg width="25" height="25" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="1.7" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="1.7" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="1.7" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="1.7" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="1.7" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="1.7" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="1.7" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="1.7" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="1.7" fill="currentColor"></circle>
            </svg>
        </a>
       
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
                    src="assets/img/team/72x72/57.webp"
                    alt=""
                  />
                </div>
                <h6 className="mt-2 text-body-emphasis">{user.profile.firstname} {user.profile.lastname}</h6>
              </div>
              <div className="mb-3 mx-3">
                <input
                  className="form-control form-control-sm"
                  id="statusUpdateInput"
                  type="text"
                  placeholder="Update your status"
                />
              </div>
            </div>
            <div
              className="overflow-auto scrollbar"
              style={{ height: "10rem" }}
            >
              <ul className="nav d-flex flex-column mb-2 pb-1">
                <li className="nav-item">
                  <a className="nav-link px-3" href="/myProfile">
                    {" "}
                    <span className="me-2 text-body" data-feather="user" />
                    <span>Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#!">
                    <span className="me-2 text-body" data-feather="pie-chart" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#!">
                    {" "}
                    <span className="me-2 text-body" data-feather="lock" />
                    Posts &amp; Activity
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#!">
                    {" "}
                    <span className="me-2 text-body" data-feather="settings" />
                    Settings &amp; Privacy{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#!">
                    {" "}
                    <span
                      className="me-2 text-body"
                      data-feather="help-circle"
                    />
                    Help Center
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#!">
                    {" "}
                    <span className="me-2 text-body" data-feather="globe" />
                    Language
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-footer p-0 border-top border-translucent">
              <ul className="nav d-flex flex-column my-3">
                <li className="nav-item">
                  <a className="nav-link px-3" href="#!">
                    {" "}
                    <span className="me-2 text-body" data-feather="user-plus" />
                    Add another account
                  </a>
                </li>
              </ul>
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
                <a className="text-body-quaternary me-1" href="#!">
                  Privacy policy
                </a>
                •
                <a className="text-body-quaternary mx-1" href="#!">
                  Terms
                </a>
                •
                <a className="text-body-quaternary ms-1" href="#!">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</nav>

</>  )
}

export default Header;
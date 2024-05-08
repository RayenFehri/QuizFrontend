import React, { useEffect, useState } from 'react';
import logo from './logo.png';
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
    <nav
      className="navbar navbar-top fixed-top navbar-expand"
      id="navbarDefault"
    >
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
          <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
            <div className="scrollbar-overlay" style={{ maxHeight: "30rem" }}>
              <div className="list pb-3">
                <h6 className="dropdown-header text-body-highlight fs-10 py-2">
                  24 <span className="text-body-quaternary">results</span>
                </h6>
                <hr className="my-0" />
                <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Recently Searched{" "}
                </h6>
                <div className="py-2">
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span
                          className="fa-solid fa-clock-rotate-left"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Store Macbook
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        {" "}
                        <span
                          className="fa-solid fa-clock-rotate-left"
                          data-fa-transform="shrink-2"
                        />{" "}
                        MacBook Air - 13″
                      </div>
                    </div>
                  </a>
                </div>
                <hr className="my-0" />
                <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Products
                </h6>
                <div className="py-2">
                  <a
                    className="dropdown-item py-2 d-flex align-items-center"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="file-thumbnail me-2">
                      <img
                        className="h-100 w-100 fit-cover rounded-3"
                        src="assets/img/products/60x60/3.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-body-highlight title">
                        MacBook Air - 13″
                      </h6>
                      <p className="fs-10 mb-0 d-flex text-body-tertiary">
                        <span className="fw-medium text-body-tertiary text-opactity-85">
                          8GB Memory - 1.6GHz - 128GB Storage
                        </span>
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item py-2 d-flex align-items-center"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="file-thumbnail me-2">
                      <img
                        className="img-fluid"
                        src="assets/img/products/60x60/3.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-body-highlight title">
                        MacBook Pro - 13″
                      </h6>
                      <p className="fs-10 mb-0 d-flex text-body-tertiary">
                        <span className="fw-medium text-body-tertiary text-opactity-85 ms-2">
                          30 Sep at 12:30 PM
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <hr className="my-0" />
                <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Quick Links
                </h6>
                <div className="py-2">
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span
                          className="fa-solid fa-link text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Support MacBook House
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        {" "}
                        <span
                          className="fa-solid fa-link text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Store MacBook″
                      </div>
                    </div>
                  </a>
                </div>
                <hr className="my-0" />
                <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Files
                </h6>
                <div className="py-2">
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span
                          className="fa-solid fa-file-zipper text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Library MacBook folder.rar
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        {" "}
                        <span
                          className="fa-solid fa-file-lines text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Feature MacBook extensions.txt
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        {" "}
                        <span
                          className="fa-solid fa-image text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        MacBook Pro_13.jpg
                      </div>
                    </div>
                  </a>
                </div>
                <hr className="my-0" />
                <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Members
                </h6>
                <div className="py-2">
                  <a
                    className="dropdown-item py-2 d-flex align-items-center"
                    href="pages/members.html"
                  >
                    <div className="avatar avatar-l status-online  me-2 text-body">
                      <img
                        className="rounded-circle "
                        src="assets/img/team/40x40/10.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-body-highlight title">
                        Carry Anna
                      </h6>
                      <p className="fs-10 mb-0 d-flex text-body-tertiary">
                        anna@technext.it
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item py-2 d-flex align-items-center"
                    href="pages/members.html"
                  >
                    <div className="avatar avatar-l  me-2 text-body">
                      <img
                        className="rounded-circle "
                        src="assets/img/team/40x40/12.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-0 text-body-highlight title">
                        John Smith
                      </h6>
                      <p className="fs-10 mb-0 d-flex text-body-tertiary">
                        smith@technext.it
                      </p>
                    </div>
                  </a>
                </div>
                <hr className="my-0" />
                <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Related Searches
                </h6>
                <div className="py-2">
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span
                          className="fa-brands fa-firefox-browser text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Search in the Web MacBook
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item"
                    href="apps/e-commerce/landing/product-details.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        {" "}
                        <span
                          className="fa-brands fa-chrome text-body"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Store MacBook″
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
              </div>
            </div>
          </div>
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
                <span className="fas fa-moon" data-feather="moon" />
              </label>
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch theme"
              >
                <span className="fas fa-sun" data-feather="sun" />
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
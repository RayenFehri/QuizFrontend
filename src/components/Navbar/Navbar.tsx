import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faListAlt , faPlusSquare, faQuestion , faUser ,faUserShield ,faUserPlus, faList, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
 <nav className="navbar navbar-vertical navbar-expand-lg">
  <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
    {/* scrollbar removed*/}
    <div className="navbar-vertical-content">
      <ul className="navbar-nav flex-column" id="navbarVerticalNav">
        <li className="nav-item">
          {/* parent pages*/}
          <div className="nav-item-wrapper">
          <a
          className="nav-link dropdown-indicator label-1"
          href="/home"
          role="button"
          data-bs-toggle=""
          aria-expanded="false"
          aria-controls="nv-home"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <FontAwesomeIcon icon={faHome} /> {/* Add the FontAwesome icon here */}
            </span>
            <span className="nav-link-text">Home</span>
          </div>
        </a>
          </div>
          
        </li>
        
        <li className="nav-item">
          {/* label*/}
          <p className="navbar-vertical-label">Managing</p>
          <hr className="navbar-vertical-line" />
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-Manager"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-Manager"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                <FontAwesomeIcon icon={faUserShield} /> {/* Add the FontAwesome icon here */}
                </span>
                <span className="nav-link-text">Manager</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-Manager"
              >
                <li className="collapsed-nav-item-title d-none">Manager</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/crm/analytics.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">  
                      <FontAwesomeIcon icon={faListAlt} /> 
                      <span className="nav-link-text">Managers List</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/addEmployee"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} /> 
                      <span className="nav-link-text">Add new Manager</span>
                      
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
           {/* parent pages*/}
           <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-Employee"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-Employee"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                <FontAwesomeIcon icon={faUser}/> 

                </span>
                <span className="nav-link-text">Employee</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-Employee"
              >
                <li className="collapsed-nav-item-title d-none">CRM</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/crm/analytics.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                    
                      <FontAwesomeIcon icon={faListAlt} /> 
                   
                      <span className="nav-link-text">Employees List</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/addEmployee"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} /> 

                      <span className="nav-link-text">Add new Employee</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
           {/* parent pages*/}
           <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-Quiz"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-Quiz"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <FontAwesomeIcon icon={faQuestion}/> 
                </span>
                <span className="nav-link-text">Quiz</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-Quiz"
              >
                <li className="collapsed-nav-item-title d-none">Quiz</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/listquiz"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">  
                      <FontAwesomeIcon icon={faList} /> 
                      <span className="nav-link-text">Quiz List</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/createquiz"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPlusSquare} /> 
                      <span className="nav-link-text">Create new Quiz</span>
                      
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>

           {/* parent pages*/}
           <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-Category"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-Category"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <FontAwesomeIcon icon={faLayerGroup}/> 
                </span>
                <span className="nav-link-text">Category</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-Category"
              >
                <li className="collapsed-nav-item-title d-none">Category</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/listcategory"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">  
                      <FontAwesomeIcon icon={faList} /> 
                      <span className="nav-link-text">Categories List</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/createcategory"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPlusSquare} /> 
                      <span className="nav-link-text">Create new Category</span>
                      
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
         
        </li>
        <li className="nav-item">
          {/* label*/}
          <p className="navbar-vertical-label">Pages</p>
          <hr className="navbar-vertical-line" />
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../pages/starter.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="compass" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Starter</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-faq"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-faq"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="help-circle" />
                </span>
                <span className="nav-link-text">Faq</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-faq"
              >
                <li className="collapsed-nav-item-title d-none">Faq</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/faq/faq-accordion.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Faq accordion</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/faq/faq-tab.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Faq tab</span>
                      <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                        New
                      </span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-landing"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-landing"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="globe" />
                </span>
                <span className="nav-link-text">Landing</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-landing"
              >
                <li className="collapsed-nav-item-title d-none">Landing</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/landing/default.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Default</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/landing/alternate.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Alternate</span>
                      <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                        New
                      </span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-pricing"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-pricing"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="tag" />
                </span>
                <span className="nav-link-text">Pricing</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-pricing"
              >
                <li className="collapsed-nav-item-title d-none">Pricing</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/pricing/pricing-column.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Pricing column</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/pricing/pricing-grid.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Pricing grid</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../pages/notifications.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="bell" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Notifications</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../pages/members.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="users" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Members</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../pages/timeline.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="clock" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Timeline</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-errors"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-errors"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="alert-triangle" />
                </span>
                <span className="nav-link-text">Errors</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-errors"
              >
                <li className="collapsed-nav-item-title d-none">Errors</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/errors/404.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">404</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/errors/403.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">403</span>
                      <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                        New
                      </span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../pages/errors/500.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">500</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-authentication"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-authentication"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="lock" />
                </span>
                <span className="nav-link-text">Authentication</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-authentication"
              >
                <li className="collapsed-nav-item-title d-none">
                  Authentication
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-simple"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-simple"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Simple</span>
                      <span
                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                        style={{ fontSize: 6 }}
                      />
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#authentication"
                      id="nv-simple"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/sign-in.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign in</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/sign-up.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign up</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/sign-out.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign out</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/forgot-password.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Forgot password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/reset-password.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Reset password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/lock-screen.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Lock screen</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/simple/2FA.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">2FA</span>
                            <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                              New
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-split"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-split"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Split</span>
                      <span
                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                        style={{ fontSize: 6 }}
                      />
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#authentication"
                      id="nv-split"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/sign-in.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign in</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/sign-up.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign up</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/sign-out.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign out</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/forgot-password.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Forgot password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/reset-password.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Reset password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/lock-screen.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Lock screen</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/split/2FA.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">2FA</span>
                            <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                              New
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-Card"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-Card"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Card</span>
                      <span
                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                        style={{ fontSize: 6 }}
                      />
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#authentication"
                      id="nv-Card"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/sign-in.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign in</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/sign-up.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign up</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/sign-out.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Sign out</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/forgot-password.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Forgot password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/reset-password.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Reset password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/lock-screen.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Lock screen</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../pages/authentication/card/2FA.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">2FA</span>
                            <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                              New
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-layouts"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="nv-layouts"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="layout" />
                </span>
                <span className="nav-link-text">Layouts</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent show"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-layouts"
              >
                <li className="collapsed-nav-item-title d-none">Layouts</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="vertical-sidenav.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Vertical sidenav</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="dark-mode.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Dark mode</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="sidenav-collapse.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Sidenav collapse</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="darknav.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Darknav</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="topnav-slim.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Topnav slim</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="navbar-top-slim.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Navbar top slim</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="navbar-top.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Navbar top</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="horizontal-slim.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Horizontal slim</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="combo-nav.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Combo nav</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="combo-nav-slim.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Combo nav slim</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="dual-nav.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Dual nav</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item">
          {/* label*/}
          <p className="navbar-vertical-label">Modules</p>
          <hr className="navbar-vertical-line" />
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-forms"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-forms"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="file-text" />
                </span>
                <span className="nav-link-text">Forms</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-forms"
              >
                <li className="collapsed-nav-item-title d-none">Forms</li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-basic"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-basic"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Basic</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#forms"
                      id="nv-basic"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/form-control.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Form control</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/input-group.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Input group</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/select.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Select</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/checks.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Checks</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/range.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Range</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/floating-labels.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Floating labels
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/basic/layout.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Layout</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-advance"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-advance"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Advance</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#forms"
                      id="nv-advance"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/advance/advance-select.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Advance select
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/advance/date-picker.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Date picker</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/advance/editor.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Editor</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/advance/file-uploader.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">File uploader</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/advance/rating.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Rating</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/forms/advance/emoji-button.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Emoji button</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/forms/validation.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Validation</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/forms/wizard.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Wizard</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-icons"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-icons"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="grid" />
                </span>
                <span className="nav-link-text">Icons</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-icons"
              >
                <li className="collapsed-nav-item-title d-none">Icons</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/icons/feather.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Feather</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/icons/font-awesome.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Font awesome</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/icons/unicons.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Unicons</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-tables"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-tables"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="columns" />
                </span>
                <span className="nav-link-text">Tables</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-tables"
              >
                <li className="collapsed-nav-item-title d-none">Tables</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/tables/basic-tables.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Basic tables</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/tables/advance-tables.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Advance tables</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/tables/bulk-select.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Bulk Select</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-ECharts"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-ECharts"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="bar-chart-2" />
                </span>
                <span className="nav-link-text">ECharts</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-ECharts"
              >
                <li className="collapsed-nav-item-title d-none">ECharts</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/line-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Line charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/bar-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Bar charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/candlestick-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Candlestick charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/geo-map.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Geo map</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/scatter-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Scatter charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/pie-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Pie charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/gauge-chart.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Gauge chart</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/radar-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Radar charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/heatmap-charts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Heatmap charts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/echarts/how-to-use.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">How to use</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-components"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-components"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="package" />
                </span>
                <span className="nav-link-text">Components</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-components"
              >
                <li className="collapsed-nav-item-title d-none">Components</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/accordion.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Accordion</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/avatar.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Avatar</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/alerts.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Alerts</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/badge.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Badge</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/breadcrumb.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Breadcrumb</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/button.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Buttons</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/calendar.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Calendar</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/card.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Card</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-carousel"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-carousel"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Carousel</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#components"
                      id="nv-carousel"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/components/carousel/bootstrap.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Bootstrap</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/components/carousel/swiper.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Swiper</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/collapse.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Collapse</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/dropdown.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Dropdown</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/list-group.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">List group</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/modal.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Modals</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-navs-_and_-Tabs"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-navs-_and_-Tabs"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Navs &amp; Tabs</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#components"
                      id="nv-navs-_and_-Tabs"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/components/navs-and-tabs/navs.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Navs</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/components/navs-and-tabs/navbar.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Navbar</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../modules/components/navs-and-tabs/tabs.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Tabs</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/offcanvas.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Offcanvas</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/progress-bar.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Progress bar</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/placeholder.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Placeholder</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/pagination.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Pagination</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/popovers.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Popovers</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/scrollspy.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Scrollspy</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/sortable.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Sortable</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/spinners.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Spinners</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/toast.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Toast</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/tooltips.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Tooltips</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/components/chat-widget.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Chat widget</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-utilities"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-utilities"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="tool" />
                </span>
                <span className="nav-link-text">Utilities</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-utilities"
              >
                <li className="collapsed-nav-item-title d-none">Utilities</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/background.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Background</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/borders.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Borders</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/colors.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Colors</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/display.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Display</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/flex.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Flex</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/stacks.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Stacks</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/float.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Float</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/grid.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Grid</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/interactions.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Interactions</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/opacity.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Opacity</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/overflow.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Overflow</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/position.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Position</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/shadows.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Shadows</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/sizing.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Sizing</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/spacing.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Spacing</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/typography.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Typography</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/vertical-align.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Vertical align</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../modules/utilities/visibility.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Visibility</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../widgets.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="server" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Widgets</span>
                </span>
                <span className="badge ms-2 badge badge-phoenix badge-phoenix-info nav-link-badge">
                  New
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-multi-level"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-multi-level"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="layers" />
                </span>
                <span className="nav-link-text">Multi level</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-multi-level"
              >
                <li className="collapsed-nav-item-title d-none">Multi level</li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-level-two"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-level-two"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Level two</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#multi-level"
                      id="nv-level-two"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../index.html#!.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Item 1</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../index.html#!.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Item 2</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-level-three"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-level-three"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Level three</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#multi-level"
                      id="nv-level-three"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../index.html#!.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Item 3</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#nv-item-4"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="nv-item-4"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon">
                              <span className="fas fa-caret-right" />
                            </div>
                            <span className="nav-link-text">Item 4</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent"
                            data-bs-parent="#level-three"
                            id="nv-item-4"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../index.html#!.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Item 5</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../index.html#!.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Item 6</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#nv-level-four"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-level-four"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-text">Level four</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                  <div className="parent-wrapper">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#multi-level"
                      id="nv-level-four"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../index.html#!.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Item 6</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#nv-item-7"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="nv-item-7"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon">
                              <span className="fas fa-caret-right" />
                            </div>
                            <span className="nav-link-text">Item 7</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent"
                            data-bs-parent="#level-four"
                            id="nv-item-7"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../index.html#!.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Item 8</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link dropdown-indicator"
                                href="#nv-item-9"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                aria-controls="nv-item-9"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="dropdown-indicator-icon">
                                    <span className="fas fa-caret-right" />
                                  </div>
                                  <span className="nav-link-text">Item 9</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                              <div className="parent-wrapper">
                                <ul
                                  className="nav collapse parent"
                                  data-bs-parent="#item-7"
                                  id="nv-item-9"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      href="../index.html#!.html"
                                      data-bs-toggle=""
                                      aria-expanded="false"
                                    >
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Item 10
                                        </span>
                                      </div>
                                    </a>
                                    {/* more inner pages*/}
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      href="../index.html#!.html"
                                      data-bs-toggle=""
                                      aria-expanded="false"
                                    >
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Item 11
                                        </span>
                                      </div>
                                    </a>
                                    {/* more inner pages*/}
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item">
          {/* label*/}
          <p className="navbar-vertical-label">Documentation</p>
          <hr className="navbar-vertical-line" />
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../documentation/getting-started.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="life-buoy" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Getting started</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-customization"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-customization"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="settings" />
                </span>
                <span className="nav-link-text">Customization</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-customization"
              >
                <li className="collapsed-nav-item-title d-none">
                  Customization
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/customization/configuration.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Configuration</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/customization/styling.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Styling</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/customization/color.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Color</span>
                      <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                        New
                      </span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/customization/dark-mode.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Dark mode</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/customization/plugin.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Plugin</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-layouts-doc"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-layouts-doc"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="table" />
                </span>
                <span className="nav-link-text">Layouts doc</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-layouts-doc"
              >
                <li className="collapsed-nav-item-title d-none">Layouts doc</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/layouts/vertical-navbar.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Vertical navbar</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/layouts/horizontal-navbar.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Horizontal navbar</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/layouts/combo-navbar.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Combo navbar</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../documentation/layouts/dual-nav.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Dual nav</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </div>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../documentation/gulp.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span className="fa-brands fa-gulp ms-1 me-1 fa-lg" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Gulp</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../documentation/design-file.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="figma" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Design file</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../changelog.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="git-merge" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Changelog</span>
                </span>
              </div>
            </a>
          </div>
          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="../showcase.html"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <span data-feather="monitor" />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Showcase</span>
                </span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="navbar-vertical-footer">
    <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
      <span className="uil uil-left-arrow-to-left fs-8" />
      <span className="uil uil-arrow-from-right fs-8" />
      <span className="navbar-vertical-footer-text ms-2">Collapsed View</span>
    </button>
  </div>
</nav>

<nav
  className="navbar navbar-top fixed-top navbar-expand"
  id="navbarDefault"
  style={{ display: "none" }}
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
      <a className="navbar-brand me-1 me-sm-3" href="../index-2.html">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <img src="../assets/img/icons/logo.png" alt="phoenix" width={27} />
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
              >
                <div className="file-thumbnail me-2">
                  <img
                    className="h-100 w-100 fit-cover rounded-3"
                    src="../assets/img/products/60x60/3.png"
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
                href="../apps/e-commerce/landing/product-details.html"
              >
                <div className="file-thumbnail me-2">
                  <img
                    className="img-fluid"
                    src="../assets/img/products/60x60/3.png"
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../pages/members.html"
              >
                <div className="avatar avatar-l status-online  me-2 text-body">
                  <img
                    className="rounded-circle "
                    src="../assets/img/team/40x40/10.webp"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 text-body-highlight title">Carry Anna</h6>
                  <p className="fs-10 mb-0 d-flex text-body-tertiary">
                    anna@technext.it
                  </p>
                </div>
              </a>
              <a
                className="dropdown-item py-2 d-flex align-items-center"
                href="../pages/members.html"
              >
                <div className="avatar avatar-l  me-2 text-body">
                  <img
                    className="rounded-circle "
                    src="../assets/img/team/40x40/12.webp"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 text-body-highlight title">John Smith</h6>
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
                href="../apps/e-commerce/landing/product-details.html"
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
                href="../apps/e-commerce/landing/product-details.html"
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
            <span className="icon" data-feather="moon" />
          </label>
          <label
            className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
            htmlFor="themeControlToggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Switch theme"
          >
            <span className="icon" data-feather="sun" />
            
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
          <span data-feather="bell" style={{ height: 20, width: 20 }} />
        </a>
        <div
          className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
          id="navbarDropdownNotfication"
          aria-labelledby="navbarDropdownNotfication"
        >
          <div className="card position-relative border-0">
            <div className="card-header p-2">
              <div className="d-flex justify-content-between">
                <h5 className="text-body-emphasis mb-0">Notificatons</h5>
                <button
                  className="btn btn-link p-0 fs-9 fw-normal"
                  type="button"
                >
                  Mark all as read
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/30.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Jessie Samson
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">💬</span>Mentioned you in
                          a comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                            10m
                          </span>
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:41 AM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <div className="avatar-name rounded-circle">
                          <span>J</span>
                        </div>
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">📅</span>Created an
                          event.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                            20m
                          </span>
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:20 AM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle avatar-placeholder"
                          src="../assets/img/team/40x40/avatar.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Jessie Samson
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">👍</span>Liked your
                          comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                            1h
                          </span>
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">9:30 AM </span>August 7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/57.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Kiera Anderson
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">💬</span>Mentioned you in
                          a comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">9:11 AM </span>August 7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/59.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Herman Carter
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">👤</span>Tagged you in a
                          comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:58 PM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/58.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Benjamin Button
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">👍</span>Liked your
                          comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:18 AM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer p-0 border-top border-translucent border-0">
              <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                <a className="fw-bolder" href="../pages/notifications.html">
                  Notification history
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          id="navbarDropdownNindeDots"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={2} cy={2} r={2} fill="currentColor" />
            <circle cx={2} cy={8} r={2} fill="currentColor" />
            <circle cx={2} cy={14} r={2} fill="currentColor" />
            <circle cx={8} cy={8} r={2} fill="currentColor" />
            <circle cx={8} cy={14} r={2} fill="currentColor" />
            <circle cx={14} cy={8} r={2} fill="currentColor" />
            <circle cx={14} cy={14} r={2} fill="currentColor" />
            <circle cx={8} cy={2} r={2} fill="currentColor" />
            <circle cx={14} cy={2} r={2} fill="currentColor" />
          </svg>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
          aria-labelledby="navbarDropdownNindeDots"
        >
          <div className="card bg-body-emphasis position-relative border-0">
            <div
              className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
              style={{ height: "20rem" }}
            >
              <div className="row text-center align-items-center gx-0 gy-0">
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/behance.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Behance
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-cloud.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Cloud
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/slack.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Slack
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/gitlab.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Gitlab
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/bitbucket.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      BitBucket
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-drive.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Drive
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/trello.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Trello
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/figma.webp"
                      alt=""
                      width={20}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Figma
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/twitter.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Twitter
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/pinterest.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Pinterest
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/ln.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Linkedin
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-maps.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Maps
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-photos.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Photos
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/spotify.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Spotify
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
              src="../assets/img/team/40x40/57.webp"
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
                    src="../assets/img/team/72x72/57.webp"
                    alt=""
                  />
                </div>
                <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
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
                  <a className="nav-link px-3" href="#!">
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
                <a
                  className="btn btn-phoenix-secondary d-flex flex-center w-100"
                  href="#!"
                >
                  {" "}
                  <span className="me-2" data-feather="log-out">
                    {" "}
                  </span>
                  Sign out
                </a>
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

<nav
  className="navbar navbar-top navbar-slim fixed-top navbar-expand"
  id="topNavSlim"
  style={{ display: "none" }}
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
      <a className="navbar-brand navbar-brand" href="../index-2.html">
        phoenix{" "}
        <span className="text-body-highlight d-none d-sm-inline">slim</span>
      </a>
    </div>
    <ul className="navbar-nav navbar-nav-icons flex-row">
      <li className="nav-item">
        <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
          <input
            className="form-check-input ms-0 theme-control-toggle-input"
            id="themeControlToggle"
            type="checkbox"
            data-theme-control="phoenixTheme"
            defaultValue="dark"
          />
          <label
            className="mb-0 theme-control-toggle-label theme-control-toggle-light"
            htmlFor="themeControlToggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Switch theme"
          >
            <span className="icon me-1 d-none d-sm-block" data-feather="moon" />
            <span className="fs-9 fw-bold">Dark</span>
          </label>
          <label
            className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
            htmlFor="themeControlToggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Switch theme"
          >
            <span className="icon me-1 d-none d-sm-block" data-feather="sun" />
            <span className="fs-9 fw-bold">Light</span>
          </label>
        </div>
      </li>
      <li className="nav-item">
        {" "}
        <a
          className="nav-link"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#searchBoxModal"
        >
          <span data-feather="search" style={{ height: 12, width: 12 }} />
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          id="navbarDropdownNotification"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span data-feather="bell" style={{ height: 12, width: 12 }} />
        </a>
        <div
          className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
          id="navbarDropdownNotfication"
          aria-labelledby="navbarDropdownNotfication"
        >
          <div className="card position-relative border-0">
            <div className="card-header p-2">
              <div className="d-flex justify-content-between">
                <h5 className="text-body-emphasis mb-0">Notificatons</h5>
                <button
                  className="btn btn-link p-0 fs-9 fw-normal"
                  type="button"
                >
                  Mark all as read
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/30.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Jessie Samson
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">💬</span>Mentioned you in
                          a comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                            10m
                          </span>
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:41 AM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <div className="avatar-name rounded-circle">
                          <span>J</span>
                        </div>
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">📅</span>Created an
                          event.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                            20m
                          </span>
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:20 AM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle avatar-placeholder"
                          src="../assets/img/team/40x40/avatar.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Jessie Samson
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">👍</span>Liked your
                          comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                            1h
                          </span>
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">9:30 AM </span>August 7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/57.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Kiera Anderson
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">💬</span>Mentioned you in
                          a comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">9:11 AM </span>August 7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/59.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Herman Carter
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">👤</span>Tagged you in a
                          comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:58 PM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="d-flex">
                      <div className="avatar avatar-m status-online me-3">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/40x40/58.webp"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 me-sm-3">
                        <h4 className="fs-9 text-body-emphasis">
                          Benjamin Button
                        </h4>
                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                          <span className="me-1 fs-10">👍</span>Liked your
                          comment.
                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                        </p>
                        <p className="text-body-secondary fs-9 mb-0">
                          <span className="me-1 fas fa-clock" />
                          <span className="fw-bold">10:18 AM </span>August
                          7,2021
                        </p>
                      </div>
                    </div>
                    <div className="d-none d-sm-block">
                      <button
                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        <span className="fas fa-ellipsis-h fs-10 text-body" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a className="dropdown-item" href="#!">
                          Mark as unread
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer p-0 border-top border-translucent border-0">
              <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                <a className="fw-bolder" href="../pages/notifications.html">
                  Notification history
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          id="navbarDropdownNindeDots"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <svg
            width={10}
            height={10}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={2} cy={2} r={2} fill="currentColor" />
            <circle cx={2} cy={8} r={2} fill="currentColor" />
            <circle cx={2} cy={14} r={2} fill="currentColor" />
            <circle cx={8} cy={8} r={2} fill="currentColor" />
            <circle cx={8} cy={14} r={2} fill="currentColor" />
            <circle cx={14} cy={8} r={2} fill="currentColor" />
            <circle cx={14} cy={14} r={2} fill="currentColor" />
            <circle cx={8} cy={2} r={2} fill="currentColor" />
            <circle cx={14} cy={2} r={2} fill="currentColor" />
          </svg>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
          aria-labelledby="navbarDropdownNindeDots"
        >
          <div className="card bg-body-emphasis position-relative border-0">
            <div
              className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
              style={{ height: "20rem" }}
            >
              <div className="row text-center align-items-center gx-0 gy-0">
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/behance.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Behance
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-cloud.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Cloud
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/slack.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Slack
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/gitlab.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Gitlab
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/bitbucket.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      BitBucket
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-drive.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Drive
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/trello.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Trello
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/figma.webp"
                      alt=""
                      width={20}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Figma
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/twitter.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Twitter
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/pinterest.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Pinterest
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/ln.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Linkedin
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-maps.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Maps
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/google-photos.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Photos
                    </p>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                    href="#!"
                  >
                    <img
                      src="../assets/img/nav-icons/spotify.webp"
                      alt=""
                      width={30}
                    />
                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                      Spotify
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link lh-1 pe-0 white-space-nowrap"
          id="navbarDropdownUser"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Olivia <span className="fa-solid fa-chevron-down fs-10" />
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
                    src="../assets/img/team/72x72/57.webp"
                    alt=""
                  />
                </div>
                <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
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
                  <a className="nav-link px-3" href="#!">
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
                <a
                  className="btn btn-phoenix-secondary d-flex flex-center w-100"
                  href="#!"
                >
                  {" "}
                  <span className="me-2" data-feather="log-out">
                    {" "}
                  </span>
                  Sign out
                </a>
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

<nav
  className="navbar navbar-top fixed-top navbar-expand-lg"
  id="navbarTop"
  style={{ display: "none" }}
>
  <div className="navbar-logo">
    <button
      className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTopCollapse"
      aria-controls="navbarTopCollapse"
      aria-expanded="false"
      aria-label="Toggle Navigation"
    >
      <span className="navbar-toggle-icon">
        <span className="toggle-line" />
      </span>
    </button>
    <a className="navbar-brand me-1 me-sm-3" href="../index-2.html">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img src="../assets/img/icons/logo.png" alt="phoenix" width={27} />
          <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
        </div>
      </div>
    </a>
  </div>
  <div
    className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center"
    id="navbarTopCollapse"
  >
    <ul
      className="navbar-nav navbar-nav-top"
      data-dropdown-on-hover="data-dropdown-on-hover"
    >
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-chart-pie" />
          Home
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li>
            <a className="dropdown-item" href="../index-2.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="shopping-cart" />E
                commerce
              </div>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="../dashboard/project-management.html"
            >
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="clipboard" />
                Project management
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../dashboard/crm.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="phone" />
                CRM
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../apps/social/feed.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="share-2" />
                Social feed
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-cube" />
          Apps
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="e-commerce"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="shopping-cart" />E
                  commerce
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="admin"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Admin
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/add-product.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Add product
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/products.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Products
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/customers.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Customers
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/customer-details.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Customer details
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/orders.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Orders
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/order-details.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Order details
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/refund.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Refund
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="customer"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Customer
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/homepage.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Homepage
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/product-details.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Product details
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/products-filter.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Products filter
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/cart.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Cart
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/checkout.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Checkout
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/shipping-info.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Shipping info
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/profile.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Profile
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/favourite-stores.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Favourite stores
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/wishlist.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Wishlist
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/order-tracking.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Order tracking
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/invoice.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Invoice
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="CRM"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="phone" />
                  CRM
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/crm/analytics.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Analytics
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/crm/deals.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Deals
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/deal-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Deal details
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/crm/leads.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Leads
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/lead-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Lead details
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/crm/reports.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Reports
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/reports-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Reports details
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/add-contact.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Add contact
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="project-management"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="clipboard" />
                  Project management
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/create-new.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Create new
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-list-view.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project list view
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-card-view.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project card view
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-board-view.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project board view
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/todo-list.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Todo list
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project details
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../apps/chat.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="message-square" />
                Chat
              </div>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="email"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="mail" />
                  Email
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/email/inbox.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Inbox
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/email/email-detail.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Email detail
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/email/compose.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Compose
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="events"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="bookmark" />
                  Events
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/events/create-an-event.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Create an event
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/events/event-detail.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Event detail
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="kanban"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="trello" />
                  Kanban
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/kanban/kanban.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Kanban
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/kanban/boards.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Boards
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/kanban/create-kanban-board.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Create board
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="social"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="share-2" />
                  Social
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/social/profile.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Profile
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/social/settings.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Settings
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../apps/calendar.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="calendar" />
                Calendar
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-files-landscapes-alt" />
          Pages
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li>
            <a className="dropdown-item" href="../pages/starter.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="compass" />
                Starter
              </div>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="faq"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="help-circle" />
                  Faq
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/faq/faq-accordion.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Faq accordion
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/faq/faq-tab.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Faq tab
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="landing"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="globe" />
                  Landing
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/landing/default.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Default
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/landing/alternate.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Alternate
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="pricing"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="tag" />
                  Pricing
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/pricing/pricing-column.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Pricing column
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/pricing/pricing-grid.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Pricing grid
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../pages/notifications.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="bell" />
                Notifications
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../pages/members.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="users" />
                Members
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../pages/timeline.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="clock" />
                Timeline
              </div>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="errors"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="alert-triangle" />
                  Errors
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../pages/errors/404.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    404
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/errors/403.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    403
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/errors/500.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    500
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="authentication"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="lock" />
                  Authentication
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="simple"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Simple
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/sign-in.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign in
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/sign-up.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign up
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/sign-out.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign out
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/forgot-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Forgot password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/reset-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Reset password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/lock-screen.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Lock screen
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/2FA.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        2FA
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="split"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Split
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/sign-in.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign in
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/sign-up.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign up
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/sign-out.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign out
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/forgot-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Forgot password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/reset-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Reset password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/lock-screen.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Lock screen
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/2FA.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        2FA
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="Card"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Card
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/sign-in.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign in
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/sign-up.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign up
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/sign-out.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign out
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/forgot-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Forgot password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/reset-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Reset password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/lock-screen.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Lock screen
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/2FA.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        2FA
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="layouts"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="layout" />
                  Layouts
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="vertical-sidenav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Vertical sidenav
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dark-mode.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dark mode
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item active"
                  href="sidenav-collapse.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Sidenav collapse
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="darknav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Darknav
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="topnav-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Topnav slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="navbar-top-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Navbar top slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="navbar-top.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Navbar top
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="horizontal-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Horizontal slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="combo-nav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Combo nav
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="combo-nav-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Combo nav slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dual-nav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dual nav
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-puzzle-piece" />
          Modules
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
          <div className="border-0 scrollbar" style={{ maxHeight: "60vh" }}>
            <div className="px-3 pt-4 pb-3 img-dropdown">
              <div className="row gx-4 gy-5">
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dropdown-item-group">
                    <span
                      className="me-2"
                      data-feather="file-text"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Forms</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/form-control.html"
                  >
                    Form control
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/input-group.html"
                  >
                    Input group
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/select.html"
                  >
                    Select
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/checks.html"
                  >
                    Checks
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/range.html"
                  >
                    Range
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/floating-labels.html"
                  >
                    Floating labels
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/layout.html"
                  >
                    Layout
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/advance-select.html"
                  >
                    Advance select
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/date-picker.html"
                  >
                    Date picker
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/editor.html"
                  >
                    Editor
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/file-uploader.html"
                  >
                    File uploader
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/rating.html"
                  >
                    Rating
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/emoji-button.html"
                  >
                    Emoji button
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/validation.html"
                  >
                    Validation
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/wizard.html"
                  >
                    Wizard
                  </a>
                  <div className="dropdown-item-group mt-5">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Icons</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/icons/feather.html"
                  >
                    Feather
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/icons/font-awesome.html"
                  >
                    Font awesome
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/icons/unicons.html"
                  >
                    Unicons
                  </a>
                  <div className="dropdown-item-group mt-5">
                    <span
                      className="me-2"
                      data-feather="bar-chart-2"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">ECharts</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/line-charts.html"
                  >
                    Line charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/bar-charts.html"
                  >
                    Bar charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/candlestick-charts.html"
                  >
                    Candlestick charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/geo-map.html"
                  >
                    Geo map
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/scatter-charts.html"
                  >
                    Scatter charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/pie-charts.html"
                  >
                    Pie charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/gauge-chart.html"
                  >
                    Gauge chart
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/radar-charts.html"
                  >
                    Radar charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/heatmap-charts.html"
                  >
                    Heatmap charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/how-to-use.html"
                  >
                    How to use
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dropdown-item-group">
                    <span
                      className="me-2"
                      data-feather="package"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Components</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/components/accordion.html"
                  >
                    Accordion
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/avatar.html"
                  >
                    Avatar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/alerts.html"
                  >
                    Alerts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/badge.html"
                  >
                    Badge
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/breadcrumb.html"
                  >
                    Breadcrumb
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/button.html"
                  >
                    Buttons
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/calendar.html"
                  >
                    Calendar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/card.html"
                  >
                    Card
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/carousel/bootstrap.html"
                  >
                    Bootstrap
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/carousel/swiper.html"
                  >
                    Swiper
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/collapse.html"
                  >
                    Collapse
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/dropdown.html"
                  >
                    Dropdown
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/list-group.html"
                  >
                    List group
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/modal.html"
                  >
                    Modals
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/navs-and-tabs/navs.html"
                  >
                    Navs
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/navs-and-tabs/navbar.html"
                  >
                    Navbar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/navs-and-tabs/tabs.html"
                  >
                    Tabs
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/offcanvas.html"
                  >
                    Offcanvas
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/progress-bar.html"
                  >
                    Progress bar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/placeholder.html"
                  >
                    Placeholder
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/pagination.html"
                  >
                    Pagination
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/popovers.html"
                  >
                    Popovers
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/scrollspy.html"
                  >
                    Scrollspy
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/sortable.html"
                  >
                    Sortable
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/spinners.html"
                  >
                    Spinners
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/toast.html"
                  >
                    Toast
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/tooltips.html"
                  >
                    Tooltips
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/chat-widget.html"
                  >
                    Chat widget
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dropdown-item-group">
                    <span
                      className="me-2"
                      data-feather="columns"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Tables</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/tables/basic-tables.html"
                  >
                    Basic tables
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/tables/advance-tables.html"
                  >
                    Advance tables
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/tables/bulk-select.html"
                  >
                    Bulk Select
                  </a>
                  <div className="dropdown-item-group mt-5">
                    <span
                      className="me-2"
                      data-feather="tool"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Utilities</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/background.html"
                  >
                    Background
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/borders.html"
                  >
                    Borders
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/colors.html"
                  >
                    Colors
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/display.html"
                  >
                    Display
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/flex.html"
                  >
                    Flex
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/stacks.html"
                  >
                    Stacks
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/float.html"
                  >
                    Float
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/grid.html"
                  >
                    Grid
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/interactions.html"
                  >
                    Interactions
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/opacity.html"
                  >
                    Opacity
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/overflow.html"
                  >
                    Overflow
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/position.html"
                  >
                    Position
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/shadows.html"
                  >
                    Shadows
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/sizing.html"
                  >
                    Sizing
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/spacing.html"
                  >
                    Spacing
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/typography.html"
                  >
                    Typography
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/vertical-align.html"
                  >
                    Vertical align
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/visibility.html"
                  >
                    Visibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-document-layout-right" />
          Documentation
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li>
            <a
              className="dropdown-item"
              href="../documentation/getting-started.html"
            >
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="life-buoy" />
                Getting started
              </div>
            </a>
          </li>
          <li className="dropdown dropdown-inside">
            <a
              className="dropdown-item dropdown-toggle"
              id="customization"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="settings" />
                  Customization
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/configuration.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Configuration
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/styling.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Styling
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/color.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Color
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/dark-mode.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dark mode
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/plugin.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Plugin
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown dropdown-inside">
            <a
              className="dropdown-item dropdown-toggle"
              id="layouts-doc"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="table" />
                  Layouts doc
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/vertical-navbar.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Vertical navbar
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/horizontal-navbar.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Horizontal navbar
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/combo-navbar.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Combo navbar
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/dual-nav.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dual nav
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../documentation/gulp.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg" />
                Gulp
              </div>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="../documentation/design-file.html"
            >
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="figma" />
                Design file
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../changelog.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="git-merge" />
                Changelog
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../showcase.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="monitor" />
                Showcase
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
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
          <span className="icon" data-feather="moon" />
        </label>
        <label
          className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
          htmlFor="themeControlToggle"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Switch theme"
        >
          <span className="icon" data-feather="sun" />
        </label>
      </div>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#searchBoxModal"
      >
        <span
          data-feather="search"
          style={{ height: 19, width: 19, marginBottom: 2 }}
        />
      </a>
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
        <span data-feather="bell" style={{ height: 20, width: 20 }} />
      </a>
      <div
        className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
        id="navbarDropdownNotfication"
        aria-labelledby="navbarDropdownNotfication"
      >
        <div className="card position-relative border-0">
          <div className="card-header p-2">
            <div className="d-flex justify-content-between">
              <h5 className="text-body-emphasis mb-0">Notificatons</h5>
              <button className="btn btn-link p-0 fs-9 fw-normal" type="button">
                Mark all as read
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="scrollbar-overlay" style={{ height: "27rem" }}>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/30.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">💬</span>Mentioned you in a
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                          10m
                        </span>
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:41 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <div className="avatar-name rounded-circle">
                        <span>J</span>
                      </div>
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">📅</span>Created an event.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                          20m
                        </span>
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:20 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle avatar-placeholder"
                        src="../assets/img/team/40x40/avatar.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">👍</span>Liked your
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                          1h
                        </span>
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">9:30 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/57.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">
                        Kiera Anderson
                      </h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">💬</span>Mentioned you in a
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">9:11 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/59.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">👤</span>Tagged you in a
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:58 PM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/58.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">
                        Benjamin Button
                      </h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">👍</span>Liked your
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:18 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer p-0 border-top border-translucent border-0">
            <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
              <a className="fw-bolder" href="../pages/notifications.html">
                Notification history
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link"
        id="navbarDropdownNindeDots"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={2} cy={2} r={2} fill="currentColor" />
          <circle cx={2} cy={8} r={2} fill="currentColor" />
          <circle cx={2} cy={14} r={2} fill="currentColor" />
          <circle cx={8} cy={8} r={2} fill="currentColor" />
          <circle cx={8} cy={14} r={2} fill="currentColor" />
          <circle cx={14} cy={8} r={2} fill="currentColor" />
          <circle cx={14} cy={14} r={2} fill="currentColor" />
          <circle cx={8} cy={2} r={2} fill="currentColor" />
          <circle cx={14} cy={2} r={2} fill="currentColor" />
        </svg>
      </a>
      <div
        className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
        aria-labelledby="navbarDropdownNindeDots"
      >
        <div className="card bg-body-emphasis position-relative border-0">
          <div
            className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
            style={{ height: "20rem" }}
          >
            <div className="row text-center align-items-center gx-0 gy-0">
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/behance.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Behance
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-cloud.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Cloud
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/slack.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Slack
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/gitlab.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Gitlab
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/bitbucket.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    BitBucket
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-drive.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Drive
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/trello.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Trello
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/figma.webp"
                    alt=""
                    width={20}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Figma
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/twitter.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Twitter
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/pinterest.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Pinterest
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/ln.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Linkedin
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-maps.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Maps
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-photos.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Photos
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/spotify.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Spotify
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
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
            src="../assets/img/team/40x40/57.webp"
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
                  src="../assets/img/team/72x72/57.webp"
                  alt=""
                />
              </div>
              <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
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
          <div className="overflow-auto scrollbar" style={{ height: "10rem" }}>
            <ul className="nav d-flex flex-column mb-2 pb-1">
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
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
                  <span className="me-2 text-body" data-feather="help-circle" />
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
              <a
                className="btn btn-phoenix-secondary d-flex flex-center w-100"
                href="#!"
              >
                {" "}
                <span className="me-2" data-feather="log-out">
                  {" "}
                </span>
                Sign out
              </a>
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
</nav>

<nav
  className="navbar navbar-top navbar-slim justify-content-between fixed-top navbar-expand-lg"
  id="navbarTopSlim"
  style={{ display: "none" }}
>
  <div className="navbar-logo">
    <button
      className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTopCollapse"
      aria-controls="navbarTopCollapse"
      aria-expanded="false"
      aria-label="Toggle Navigation"
    >
      <span className="navbar-toggle-icon">
        <span className="toggle-line" />
      </span>
    </button>
    <a className="navbar-brand navbar-brand" href="../index-2.html">
      phoenix{" "}
      <span className="text-body-highlight d-none d-sm-inline">slim</span>
    </a>
  </div>
  <div
    className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center"
    id="navbarTopCollapse"
  >
    <ul
      className="navbar-nav navbar-nav-top"
      data-dropdown-on-hover="data-dropdown-on-hover"
    >
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-chart-pie" />
          Home
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li>
            <a className="dropdown-item" href="../index-2.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="shopping-cart" />E
                commerce
              </div>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="../dashboard/project-management.html"
            >
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="clipboard" />
                Project management
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../dashboard/crm.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="phone" />
                CRM
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../apps/social/feed.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="share-2" />
                Social feed
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-cube" />
          Apps
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="e-commerce"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="shopping-cart" />E
                  commerce
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="admin"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Admin
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/add-product.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Add product
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/products.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Products
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/customers.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Customers
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/customer-details.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Customer details
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/orders.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Orders
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/order-details.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Order details
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/admin/refund.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Refund
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="customer"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Customer
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/homepage.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Homepage
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/product-details.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Product details
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/products-filter.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Products filter
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/cart.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Cart
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/checkout.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Checkout
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/shipping-info.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Shipping info
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/profile.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Profile
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/favourite-stores.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Favourite stores
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/wishlist.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Wishlist
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/order-tracking.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Order tracking
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../apps/e-commerce/landing/invoice.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Invoice
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="CRM"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="phone" />
                  CRM
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/crm/analytics.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Analytics
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/crm/deals.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Deals
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/deal-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Deal details
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/crm/leads.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Leads
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/lead-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Lead details
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/crm/reports.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Reports
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/reports-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Reports details
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/crm/add-contact.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Add contact
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="project-management"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="clipboard" />
                  Project management
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/create-new.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Create new
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-list-view.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project list view
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-card-view.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project card view
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-board-view.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project board view
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/todo-list.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Todo list
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/project-management/project-details.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Project details
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../apps/chat.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="message-square" />
                Chat
              </div>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="email"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="mail" />
                  Email
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/email/inbox.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Inbox
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/email/email-detail.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Email detail
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/email/compose.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Compose
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="events"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="bookmark" />
                  Events
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/events/create-an-event.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Create an event
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/events/event-detail.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Event detail
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="kanban"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="trello" />
                  Kanban
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/kanban/kanban.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Kanban
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../apps/kanban/boards.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Boards
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/kanban/create-kanban-board.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Create board
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="social"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="share-2" />
                  Social
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../apps/social/profile.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Profile
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../apps/social/settings.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Settings
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../apps/calendar.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="calendar" />
                Calendar
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-files-landscapes-alt" />
          Pages
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li>
            <a className="dropdown-item" href="../pages/starter.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="compass" />
                Starter
              </div>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="faq"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="help-circle" />
                  Faq
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/faq/faq-accordion.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Faq accordion
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/faq/faq-tab.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Faq tab
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="landing"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="globe" />
                  Landing
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/landing/default.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Default
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/landing/alternate.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Alternate
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="pricing"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="tag" />
                  Pricing
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/pricing/pricing-column.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Pricing column
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../pages/pricing/pricing-grid.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Pricing grid
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../pages/notifications.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="bell" />
                Notifications
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../pages/members.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="users" />
                Members
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../pages/timeline.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="clock" />
                Timeline
              </div>
            </a>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="errors"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="alert-triangle" />
                  Errors
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../pages/errors/404.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    404
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/errors/403.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    403
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/errors/500.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    500
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="authentication"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="lock" />
                  Authentication
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="simple"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Simple
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/sign-in.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign in
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/sign-up.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign up
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/sign-out.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign out
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/forgot-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Forgot password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/reset-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Reset password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/lock-screen.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Lock screen
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/simple/2FA.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        2FA
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="split"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Split
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/sign-in.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign in
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/sign-up.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign up
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/sign-out.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign out
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/forgot-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Forgot password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/reset-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Reset password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/lock-screen.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Lock screen
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/split/2FA.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        2FA
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-item dropdown-toggle"
                  id="Card"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                    <span>
                      <span className="me-2 uil" />
                      Card
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/sign-in.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign in
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/sign-up.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign up
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/sign-out.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Sign out
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/forgot-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Forgot password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/reset-password.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Reset password
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/lock-screen.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        Lock screen
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../pages/authentication/card/2FA.html"
                    >
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil" />
                        2FA
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="dropdown-item dropdown-toggle"
              id="layouts"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="layout" />
                  Layouts
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="vertical-sidenav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Vertical sidenav
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dark-mode.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dark mode
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item active"
                  href="sidenav-collapse.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Sidenav collapse
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="darknav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Darknav
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="topnav-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Topnav slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="navbar-top-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Navbar top slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="navbar-top.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Navbar top
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="horizontal-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Horizontal slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="combo-nav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Combo nav
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="combo-nav-slim.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Combo nav slim
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="dual-nav.html">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dual nav
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-puzzle-piece" />
          Modules
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
          <div className="border-0 scrollbar" style={{ maxHeight: "60vh" }}>
            <div className="px-3 pt-4 pb-3 img-dropdown">
              <div className="row gx-4 gy-5">
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dropdown-item-group">
                    <span
                      className="me-2"
                      data-feather="file-text"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Forms</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/form-control.html"
                  >
                    Form control
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/input-group.html"
                  >
                    Input group
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/select.html"
                  >
                    Select
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/checks.html"
                  >
                    Checks
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/range.html"
                  >
                    Range
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/floating-labels.html"
                  >
                    Floating labels
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/basic/layout.html"
                  >
                    Layout
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/advance-select.html"
                  >
                    Advance select
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/date-picker.html"
                  >
                    Date picker
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/editor.html"
                  >
                    Editor
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/file-uploader.html"
                  >
                    File uploader
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/rating.html"
                  >
                    Rating
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/advance/emoji-button.html"
                  >
                    Emoji button
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/validation.html"
                  >
                    Validation
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/forms/wizard.html"
                  >
                    Wizard
                  </a>
                  <div className="dropdown-item-group mt-5">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Icons</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/icons/feather.html"
                  >
                    Feather
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/icons/font-awesome.html"
                  >
                    Font awesome
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/icons/unicons.html"
                  >
                    Unicons
                  </a>
                  <div className="dropdown-item-group mt-5">
                    <span
                      className="me-2"
                      data-feather="bar-chart-2"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">ECharts</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/line-charts.html"
                  >
                    Line charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/bar-charts.html"
                  >
                    Bar charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/candlestick-charts.html"
                  >
                    Candlestick charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/geo-map.html"
                  >
                    Geo map
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/scatter-charts.html"
                  >
                    Scatter charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/pie-charts.html"
                  >
                    Pie charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/gauge-chart.html"
                  >
                    Gauge chart
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/radar-charts.html"
                  >
                    Radar charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/heatmap-charts.html"
                  >
                    Heatmap charts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/echarts/how-to-use.html"
                  >
                    How to use
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dropdown-item-group">
                    <span
                      className="me-2"
                      data-feather="package"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Components</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/components/accordion.html"
                  >
                    Accordion
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/avatar.html"
                  >
                    Avatar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/alerts.html"
                  >
                    Alerts
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/badge.html"
                  >
                    Badge
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/breadcrumb.html"
                  >
                    Breadcrumb
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/button.html"
                  >
                    Buttons
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/calendar.html"
                  >
                    Calendar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/card.html"
                  >
                    Card
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/carousel/bootstrap.html"
                  >
                    Bootstrap
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/carousel/swiper.html"
                  >
                    Swiper
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/collapse.html"
                  >
                    Collapse
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/dropdown.html"
                  >
                    Dropdown
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/list-group.html"
                  >
                    List group
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/modal.html"
                  >
                    Modals
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/navs-and-tabs/navs.html"
                  >
                    Navs
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/navs-and-tabs/navbar.html"
                  >
                    Navbar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/navs-and-tabs/tabs.html"
                  >
                    Tabs
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/offcanvas.html"
                  >
                    Offcanvas
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/progress-bar.html"
                  >
                    Progress bar
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/placeholder.html"
                  >
                    Placeholder
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/pagination.html"
                  >
                    Pagination
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/popovers.html"
                  >
                    Popovers
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/scrollspy.html"
                  >
                    Scrollspy
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/sortable.html"
                  >
                    Sortable
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/spinners.html"
                  >
                    Spinners
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/toast.html"
                  >
                    Toast
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/tooltips.html"
                  >
                    Tooltips
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/components/chat-widget.html"
                  >
                    Chat widget
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dropdown-item-group">
                    <span
                      className="me-2"
                      data-feather="columns"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Tables</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/tables/basic-tables.html"
                  >
                    Basic tables
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/tables/advance-tables.html"
                  >
                    Advance tables
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/tables/bulk-select.html"
                  >
                    Bulk Select
                  </a>
                  <div className="dropdown-item-group mt-5">
                    <span
                      className="me-2"
                      data-feather="tool"
                      style={{ strokeWidth: 2 }}
                    />
                    <h6 className="dropdown-item-title">Utilities</h6>
                  </div>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/background.html"
                  >
                    Background
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/borders.html"
                  >
                    Borders
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/colors.html"
                  >
                    Colors
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/display.html"
                  >
                    Display
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/flex.html"
                  >
                    Flex
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/stacks.html"
                  >
                    Stacks
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/float.html"
                  >
                    Float
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/grid.html"
                  >
                    Grid
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/interactions.html"
                  >
                    Interactions
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/opacity.html"
                  >
                    Opacity
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/overflow.html"
                  >
                    Overflow
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/position.html"
                  >
                    Position
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/shadows.html"
                  >
                    Shadows
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/sizing.html"
                  >
                    Sizing
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/spacing.html"
                  >
                    Spacing
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/typography.html"
                  >
                    Typography
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/vertical-align.html"
                  >
                    Vertical align
                  </a>
                  <a
                    className="dropdown-link"
                    href="../modules/utilities/visibility.html"
                  >
                    Visibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle lh-1"
          href="#!"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="uil fs-8 me-2 uil-document-layout-right" />
          Documentation
        </a>
        <ul className="dropdown-menu navbar-dropdown-caret">
          <li>
            <a
              className="dropdown-item"
              href="../documentation/getting-started.html"
            >
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="life-buoy" />
                Getting started
              </div>
            </a>
          </li>
          <li className="dropdown dropdown-inside">
            <a
              className="dropdown-item dropdown-toggle"
              id="customization"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="settings" />
                  Customization
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/configuration.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Configuration
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/styling.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Styling
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/color.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Color
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/dark-mode.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dark mode
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/customization/plugin.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Plugin
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown dropdown-inside">
            <a
              className="dropdown-item dropdown-toggle"
              id="layouts-doc"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <div className="dropdown-item-wrapper">
                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                <span>
                  <span className="me-2 uil" data-feather="table" />
                  Layouts doc
                </span>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/vertical-navbar.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Vertical navbar
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/horizontal-navbar.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Horizontal navbar
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/combo-navbar.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Combo navbar
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../documentation/layouts/dual-nav.html"
                >
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" />
                    Dual nav
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="../documentation/gulp.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg" />
                Gulp
              </div>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="../documentation/design-file.html"
            >
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="figma" />
                Design file
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../changelog.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="git-merge" />
                Changelog
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="../showcase.html">
              <div className="dropdown-item-wrapper">
                <span className="me-2 uil" data-feather="monitor" />
                Showcase
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <ul className="navbar-nav navbar-nav-icons flex-row">
    <li className="nav-item">
      <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
        <input
          className="form-check-input ms-0 theme-control-toggle-input"
          id="themeControlToggle"
          type="checkbox"
          data-theme-control="phoenixTheme"
          defaultValue="dark"
        />
        <label
          className="mb-0 theme-control-toggle-label theme-control-toggle-light"
          htmlFor="themeControlToggle"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Switch theme"
        >
          <span className="icon me-1 d-none d-sm-block" data-feather="moon" />
          <span className="fs-9 fw-bold">Dark</span>
        </label>
        <label
          className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
          htmlFor="themeControlToggle"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Switch theme"
        >
          <span className="icon me-1 d-none d-sm-block" data-feather="sun" />
          <span className="fs-9 fw-bold">Light</span>
        </label>
      </div>
    </li>
    <li className="nav-item">
      {" "}
      <a
        className="nav-link"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#searchBoxModal"
      >
        <span data-feather="search" style={{ height: 12, width: 12 }} />
      </a>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link"
        id="navbarDropdownNotification"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span data-feather="bell" style={{ height: 12, width: 12 }} />
      </a>
      <div
        className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
        id="navbarDropdownNotfication"
        aria-labelledby="navbarDropdownNotfication"
      >
        <div className="card position-relative border-0">
          <div className="card-header p-2">
            <div className="d-flex justify-content-between">
              <h5 className="text-body-emphasis mb-0">Notificatons</h5>
              <button className="btn btn-link p-0 fs-9 fw-normal" type="button">
                Mark all as read
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="scrollbar-overlay" style={{ height: "27rem" }}>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/30.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">💬</span>Mentioned you in a
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                          10m
                        </span>
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:41 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <div className="avatar-name rounded-circle">
                        <span>J</span>
                      </div>
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">📅</span>Created an event.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                          20m
                        </span>
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:20 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle avatar-placeholder"
                        src="../assets/img/team/40x40/avatar.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">👍</span>Liked your
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                          1h
                        </span>
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">9:30 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/57.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">
                        Kiera Anderson
                      </h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">💬</span>Mentioned you in a
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">9:11 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/59.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">👤</span>Tagged you in a
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:58 PM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <div className="d-flex">
                    <div className="avatar avatar-m status-online me-3">
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/40x40/58.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 me-sm-3">
                      <h4 className="fs-9 text-body-emphasis">
                        Benjamin Button
                      </h4>
                      <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                        <span className="me-1 fs-10">👍</span>Liked your
                        comment.
                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                      </p>
                      <p className="text-body-secondary fs-9 mb-0">
                        <span className="me-1 fas fa-clock" />
                        <span className="fw-bold">10:18 AM </span>August 7,2021
                      </p>
                    </div>
                  </div>
                  <div className="d-none d-sm-block">
                    <button
                      className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10 text-body" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        Mark as unread
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer p-0 border-top border-translucent border-0">
            <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
              <a className="fw-bolder" href="../pages/notifications.html">
                Notification history
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link"
        id="navbarDropdownNindeDots"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <svg
          width={10}
          height={10}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={2} cy={2} r={2} fill="currentColor" />
          <circle cx={2} cy={8} r={2} fill="currentColor" />
          <circle cx={2} cy={14} r={2} fill="currentColor" />
          <circle cx={8} cy={8} r={2} fill="currentColor" />
          <circle cx={8} cy={14} r={2} fill="currentColor" />
          <circle cx={14} cy={8} r={2} fill="currentColor" />
          <circle cx={14} cy={14} r={2} fill="currentColor" />
          <circle cx={8} cy={2} r={2} fill="currentColor" />
          <circle cx={14} cy={2} r={2} fill="currentColor" />
        </svg>
      </a>
      <div
        className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
        aria-labelledby="navbarDropdownNindeDots"
      >
        <div className="card bg-body-emphasis position-relative border-0">
          <div
            className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
            style={{ height: "20rem" }}
          >
            <div className="row text-center align-items-center gx-0 gy-0">
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/behance.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Behance
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-cloud.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Cloud
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/slack.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Slack
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/gitlab.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Gitlab
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/bitbucket.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    BitBucket
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-drive.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Drive
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/trello.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Trello
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/figma.webp"
                    alt=""
                    width={20}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Figma
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/twitter.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Twitter
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/pinterest.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Pinterest
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/ln.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Linkedin
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-maps.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Maps
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/google-photos.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Photos
                  </p>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                  href="#!"
                >
                  <img
                    src="../assets/img/nav-icons/spotify.webp"
                    alt=""
                    width={30}
                  />
                  <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                    Spotify
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link lh-1 pe-0 white-space-nowrap"
        id="navbarDropdownUser"
        href="#!"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        Olivia <span className="fa-solid fa-chevron-down fs-10" />
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
                  src="../assets/img/team/72x72/57.webp"
                  alt=""
                />
              </div>
              <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
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
          <div className="overflow-auto scrollbar" style={{ height: "10rem" }}>
            <ul className="nav d-flex flex-column mb-2 pb-1">
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
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
                  <span className="me-2 text-body" data-feather="help-circle" />
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
              <a
                className="btn btn-phoenix-secondary d-flex flex-center w-100"
                href="#!"
              >
                {" "}
                <span className="me-2" data-feather="log-out">
                  {" "}
                </span>
                Sign out
              </a>
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
</nav>

  </>
  )
}

export default Navbar
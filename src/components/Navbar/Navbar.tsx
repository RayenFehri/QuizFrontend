import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faUserTie,faUserPlus,faUsersCog, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarDays, faCalendarXmark, faL, faA, faCircleQuestion  } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Services/Auth/AuthContext';



function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      document.documentElement.classList.remove('navbar-vertical-collapsed');
    } else {
      document.documentElement.classList.add('navbar-vertical-collapsed');
    }
  };
  // const [collapsed, setCollapsed] = useState(false);

  // const handleToggleSidebar = () => {
  //   setCollapsed(!collapsed);
  // };


    const { isAuthenticated, logoutUser } = useAuth();
  
    const handleLogout = () => {
      logoutUser();
    };


  return (
    <>
    
<nav className="navbar navbar-vertical navbar-expand-lg "   
 >

  <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
    {/* scrollbar removed*/}
    <div className="navbar-vertical-content">
      <ul className="navbar-nav flex-column" id="navbarVerticalNav">
        <li className="nav-item">
        <div className="nav-item-wrapper">
            <a
              className="nav-link label-1"
              href="/"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                </span>

                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Dashboard</span>
                </span>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item">
          {/* label*/}
          <p className="navbar-vertical-label">PAGES</p>
          <hr className="navbar-vertical-line" />
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-CRM"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-CRM"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">

                <FontAwesomeIcon icon={faUserTie} />                

                </span>
                <span className="nav-link-text">Employees</span>
                <span
                  className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                  style={{ fontSize: 6 }}
                />
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-CRM" >
                <li className="collapsed-nav-item-title d-none">Employees</li>

                {/* {isAuthenticated && ( */}
                <li className="nav-item">
                  <a  className="nav-link"  href="/addEmployee"  data-bs-toggle="" aria-expanded="false" >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} />
                      <span className="nav-link-text">Create New Employee</span>
                    </div>
                  </a>
                </li>
                   {/* )} */}

                    {/* {isAuthenticated && ( */}
                <li className="nav-item">
                  <a className="nav-link"  href="/listEmployees" data-bs-toggle=""  aria-expanded="false" >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUsers} />                
                      <span className="nav-link-text">List Employees</span>
                      <span className="badge ms-2 badge badge-phoenix badge-phoenix-info ">
                        New
                      </span>
                    </div>
                  </a>
                </li>
                {/* )} */}

              </ul>
            </div>
          </div>

          <div className="nav-item-wrapper">
            <a className="nav-link dropdown-indicator label-1" href="#nv-project-management" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-project-management" >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                <FontAwesomeIcon icon={faUsersCog} />                 </span>
                <span className="nav-link-text">Managers</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul  className="nav collapse parent"  data-bs-parent="#navbarVerticalCollapse" id="nv-project-management" >
                <li className="collapsed-nav-item-title d-none"> Managers </li>

                <li className="nav-item">
                  <a className="nav-link"  href="/addManager"  data-bs-toggle="" aria-expanded="false" >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} />
                      <span className="nav-link-text">Create New Manager</span>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link"href="/listManagers" data-bs-toggle=""  aria-expanded="false" >
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUsers} />                
                      <span className="nav-link-text">List Managers</span>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>

          {/* parent pages*/}
          <div className="nav-item-wrapper">
            <a
              className="nav-link dropdown-indicator label-1"
              href="#nv-email"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-email"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                <FontAwesomeIcon icon={faCircleQuestion} />                
                </span>
                <span className="nav-link-text">Quiz</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-email"
              >
                <li className="collapsed-nav-item-title d-none">Email</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/email/inbox.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Create new Quiz</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/email/email-detail.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">List Quiz</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/sendEmail"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Email</span>
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
              href="#nv-events"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-events"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="bookmark" />
                </span>
                <span className="nav-link-text"> Quiz Categoey</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-events"
              >
                <li className="collapsed-nav-item-title d-none">Events</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/events/create-an-event.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Create an event</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/events/event-detail.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Event detail</span>
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
              href="#nv-kanban"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-kanban"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="trello" />
                </span>
                <span className="nav-link-text">Reports</span>
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
                id="nv-kanban"
              >
                <li className="collapsed-nav-item-title d-none">Kanban</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/kanban/kanban.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Kanban</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/kanban/boards.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Boards</span>
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
                    href="../apps/kanban/create-kanban-board.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Create board</span>
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
              href="#nv-social"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="nv-social"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right" />
                </div>
                <span className="nav-link-icon">
                  <span data-feather="share-2" />
                </span>
                <span className="nav-link-text">Social</span>
              </div>
            </a>
            <div className="parent-wrapper label-1">
              <ul
                className="nav collapse parent"
                data-bs-parent="#navbarVerticalCollapse"
                id="nv-social"
              >
                <li className="collapsed-nav-item-title d-none">Social</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/social/profile.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Profile</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../apps/social/settings.html"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text">Settings</span>
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
              href="/calendar"
              role="button"
              data-bs-toggle=""
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span className="nav-link-text-wrapper">
                  <span className="nav-link-text">Calendar</span>
                </span>
              </div>
            </a>
          </div>
        </li>
     
      </ul>
    </div>
  </div>
  <div className="navbar-vertical-footer">
      <button
        className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"
        type="button"
        onClick={toggleNavbar}
      >
        <span className={collapsed ? "uil uil-arrow-from-right fs-8" : "uil uil-left-arrow-to-left fs-8"} />
        <span className="navbar-vertical-footer-text ms-2">{collapsed ? "Expanded View" : "Collapsed View"}</span>
      </button>
    </div>
</nav>




<nav
  className="navbar navbar-top navbar-slim justify-content-between fixed-top navbar-expand-lg"
  id="navbarTopSlim"
  style={{ display: "none" }}
>
</nav>


    
  </>
  )
}

export default Navbar
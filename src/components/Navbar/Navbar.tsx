import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserTie, faUserPlus, faUsersCog, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarDays, faCalendarXmark, faL, faA, faCircleQuestion, faArrowRight, faArrowLeft, faQuestion, faList, faPlusSquare, faCommenting, faLayerGroup, faBuilding, faListAlt, faBookOpenReader, faBookSkull, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Services/Auth/AuthContext';
import { getCurrentUser } from '../../Services/Auth/auth.service';




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

  const currentUser = getCurrentUser();

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

      <nav className="navbar navbar-vertical navbar-expand-lg ">

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
                        <a className="nav-link" href="/addEmployee" data-bs-toggle="" aria-expanded="false" >
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span className="nav-link-text">Create New Employee</span>
                          </div>
                        </a>
                      </li>
                      {/* )} */}

                      {/* {isAuthenticated && ( */}
                      <li className="nav-item">
                        <a className="nav-link" href="/listEmployees" data-bs-toggle="" aria-expanded="false" >
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
                    <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-project-management" >
                      <li className="collapsed-nav-item-title d-none"> Managers </li>
                      {currentUser.authenticationData.user.user_metadata
                            .role == 1 ? (
                      <li className="nav-item">
                        <a className="nav-link" href="/addManager" data-bs-toggle="" aria-expanded="false" >
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span className="nav-link-text">Create New Manager</span>
                          </div>
                        </a>
                      </li>
                                ) : null}
                      <li className="nav-item">
                        <a className="nav-link" href="/listManagers" data-bs-toggle="" aria-expanded="false" >
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
                        <FontAwesomeIcon icon={faQuestion} />
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
                          href="/chatBot"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCommenting} />
                            <span className="nav-link-text">Quiz ChatBot</span>
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
                        <FontAwesomeIcon icon={faLayerGroup} />
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

                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-Group"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-Group"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right" />
                      </div>
                      <span className="nav-link-icon">
                        <FontAwesomeIcon icon={faBuilding} /> {/* Add the FontAwesome icon here */}
                      </span>
                      <span className="nav-link-text">Group</span>
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
                      id="nv-Group"
                    >
                      <li className="collapsed-nav-item-title d-none">Group</li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/listgroup"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faListAlt} />
                            <span className="nav-link-text">Groups List</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/creategroup"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faBuilding} />
                            <span className="nav-link-text">Create new group</span>

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
                        <FontAwesomeIcon icon={faBookOpen} />
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
                          href="/listReport"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">List Reports</span>
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
            <span className="fs-8">
              {collapsed ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon icon={faArrowLeft} />}
            </span>        <span className="navbar-vertical-footer-text ms-2">{collapsed ? "Expanded View" : "Collapsed View"}</span>
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
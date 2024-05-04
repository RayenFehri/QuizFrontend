import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCalendar, faClipboard, faUserAlt ,faUsersCog} from "@fortawesome/free-solid-svg-icons";

import DonutChart from "react-donut-chart";



const Home = () => {

  const [totalManagers, setTotalManagers] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data: any[]) => {
        console.log("Données utilisateurs reçues :", data);
        const managersData = data.filter(user => user.user.user_metadata.role === 1); // Filtrer les utilisateurs ayant le rôle 2 (Manager)
        setTotalManagers(managersData.length);
      })
      .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }, []);
  return (
    <>
    <div className="content " >
      <div >
        <div className="row gy-3 mb-6 justify-content-between">
          <div className="col-md-9 col-auto">
            <h2 className="mb-2 text-body-emphasis">Admin Dashboard</h2>
            {/* <h5 className="text-body-tertiary fw-semibold">
              Here’s what’s going on at your business right now
            </h5> */}
          </div>
          {/* <div className="col-md-3 col-auto">
            <div className="flatpickr-input-container ">
              <input
                className="form-control ps-6 datetimepicker"
                id="datepicker"
                type="date"
                data-options='{"dateFormat":"M j, Y","disableMobile":true,"defaultDate":"Mar 1, 2022"}'
              />
              <FontAwesomeIcon
                className="flatpickr-icon text-body-tertiary mt-1"
                icon={faCalendar}
              />
            </div>
          </div> */}
        </div>
        <div className="row mb-3 gy-6">
          <div className="col-12 col-xxl-2">
            <div className="row align-items-center g-3 g-xxl-0 h-100 align-content-between">
              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="fs-4 lh-1 text-primary-dark"
                    icon={faBook}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">32</h2>
                      <span className="fs-7 fw-semibold text-body">
                        Quizzes
                      </span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">
                      Awating processing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  {/* <FontAwesomeIcon className="fs-5 lh-1 text-warning-dark" icon={faUsersCog} /> */}
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                    <h2 className="mb-0 me-2">{totalManagers}</h2> 
                           <span className="fs-7 fw-semibold text-body">
                        Managers
                      </span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">
                      Managing departments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="fs-4 lh-1 text-success-dark"
                    icon={faUserAlt}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">94</h2>
                      <span className="fs-7 fw-semibold text-body">Employees</span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">
                      Working hard
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="fs-4 lh-1 text-danger-dark"
                    icon={faClipboard}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">3</h2>
                      <span className="fs-7 fw-semibold text-body">
                        Reports
                      </span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">Are ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n8 px-lg-6 bg-body-emphasis pt-7 pb-3 border-y">
          <div className="row">
            <div className="col-12 col-xl-7 col-xxl-6">
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-7" style={{ marginLeft: "13%"}}>
                  <h3 className="text-body-emphasis text-nowrap">
                    Statistics
                  </h3>
                  <p className="text-body-tertiary mb-md-7">
                    How many fruits are on tree
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-bold">Scores intervals </p>
                    <p className="mb-0 fs-9">
                      Total count <span className="fw-bold">257</span>
                    </p>
                  </div>
                  <hr className="bg-body-secondary mb-2 mt-2" />
                  <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-info-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                     Between 50-75
                    </p>
                    <h5 className="mb-0 text-body">78</h5>
                  </div>
                  {/* <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-warning-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Development
                    </p>
                    <h5 className="mb-0 text-body">63</h5>
                  </div> */}
                  <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-danger-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Between 75-100
                    </p>
                    <h5 className="mb-0 text-body">56</h5>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-success-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Between 0-25
                    </p>
                    <h5 className="mb-0 text-body">36</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-block bg-primary bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Between 25-50
                    </p>
                    <h5 className="mb-0 text-body">24</h5>
                  </div>
                  <button className="btn btn-outline-primary mt-5">
                    See Details
                    <span className="fas fa-angle-right ms-2 fs-10 text-center" />
                  </button>
                </div>
                
                
              </div>
            </div>
            
            <div className="col-xl-5 col-xxl-6" style={{marginBottom:"3%", marginLeft:"-1%"}}>
                <DonutChart
                  className = {
                    "donut-chart-container "
                  }
                  innerRadius={0.5}
                  height={320}
                  width={500}
                  data={[
                    {
                      label: "Between 0-25",
                      value: 10,
                    },
                    {
                      label: "Between 75-100",
                      value: 20,
                    },
                    {
                      label: "Between 25-50",
                      value: 30,
                    },
                    {
                      label: "Between 50-75",
                      value: 40,
                    },
                    
                  ]}
                  strokeColor="#141824"
                  emptyColor={"#ffffff"}
                  outerRadius={0.9}
                  colors={[
                    "#90d67e",
                    "#f38270",
                    "#85a9ff",
                    "#5fc6ff",
                    "#fecc85",
                  ]}
                />
              
            </div>
          </div>
          </div>
        </div>
        <div className="mx-lg-n4 mt-3">
          <div className="row g-3">
            <div className="col-12 col-xl-6 col-xxl-7">
              <div className="card todo-list h-100">
                <div className="card-header border-bottom-0 pb-0">
                  <div className="row justify-content-between align-items-center mb-4">
                    <div className="col-auto">
                      <h3 className="text-body-emphasis">To do</h3>
                      <p className="mb-0 text-body-tertiary">
                        Task assigned to me
                      </p>
                    </div>
                    <div className="col-auto w-100 w-md-auto">
                      <div className="row align-items-center g-0 justify-content-between">
                        <div className="col-12 col-sm-auto">
                          <div
                            className="search-box w-100 mb-2 mb-sm-0"
                            style={{ maxWidth: "30rem" }}
                          >
                            <form
                              className="position-relative"
                              data-bs-toggle="search"
                              data-bs-display="static"
                            >
                              <input
                                className="form-control search-input search"
                                type="search"
                                placeholder="Search tasks"
                                aria-label="Search"
                              />
                              <span className="fas fa-search search-box-icon" />
                            </form>
                          </div>
                        </div>
                        <div className="col-auto d-flex">
                          <p className="mb-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
                            <span className="fas fa-filter me-1 fw-extra-bold fs-10" />
                            23 tasks
                          </p>
                          <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold">
                            <span className="fas fa-sort me-1 fw-extra-bold fs-10" />
                            Sorting
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body py-0 scrollbar to-do-list-body">
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-0"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Designing the dungeon
                          </label>
                          <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-primary">
                            DRAFT
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />2
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            12 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-1"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Hiring a motion graphic designer
                          </label>
                          <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-warning">
                            URGENT
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />2
                          </a>
                          <a
                            className="text-warning fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-tasks me-1" />3
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            12 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-2"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Daily Meetings Purpose, participants
                          </label>
                          <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
                            ON PROCESS
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />4
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            12 Dec, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              05:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-3"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Finalizing the geometric shapes
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />3
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            12 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-4"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Daily meeting with team members
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            1 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-5"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Daily Standup Meetings
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-warning fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-tasks me-1" />4
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            13 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              10:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-6"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Procrastinate for a month
                          </label>
                          <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
                            ON PROCESS
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />3
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            12 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-7"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            warming up
                          </label>
                          <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-secondary">
                            CLOSE
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />3
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            12 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-8"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Make ready for release
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />2
                          </a>
                          <a
                            className="text-warning fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-tasks me-1" />2
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            2o Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              1:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-9"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Modify the component
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />4
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            22 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              1:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-actions-trigger py-3 border-top border-bottom">
                    <input
                      className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined"
                      type="checkbox"
                      id="checkbox-todo-10"
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    />
                    <div
                      className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
                            Delete overlapping tasks and articles
                          </label>
                          <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-secondary">
                            CLOSE
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                        <div className="d-flex lh-1 align-items-center">
                          <a
                            className="text-body-tertiary fw-bold fs-10 me-2"
                            href="#!"
                          >
                            <span className="fas fa-paperclip me-1" />2
                          </a>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                            25 Nov, 2021
                          </p>
                          <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                            <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
                              1:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
                      style={{ top: "23%" }}
                      data-event-propagation-prevent="data-event-propagation-prevent"
                    >
                      <div
                        className="hover-actions end-0"
                        data-event-propagation-prevent="data-event-propagation-prevent"
                      >
                        <button
                          className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-edit" />
                        </button>
                        <button
                          className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0"
                          data-event-propagation-prevent="data-event-propagation-prevent"
                        >
                          <span className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content bg-body overflow-hidden">
                        <div className="modal-header px-6 py-5 pe-sm-5 px-md-6 dark__bg-gray-1100">
                          <h3 className="text-body-highlight fw-bolder mb-0">
                            Designing the Dungeon Blueprint
                          </h3>
                          <button
                            className="btn btn-phoenix-secondary btn-icon btn-icon-xl flex-shrink-0"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span className="fa-solid fa-xmark" />
                          </button>
                        </div>
                        <div className="modal-body bg-body-highlight px-6 py-0">
                          <div className="row gx-14">
                            <div className="col-12 col-lg-7 border-end-lg">
                              <div className="py-6">
                                <div className="mb-7">
                                  <div className="d-flex align-items-center mb-3">
                                    <h4 className="text-body me-3">
                                      Description
                                    </h4>
                                    <a
                                      className="btn btn-link text-decoration-none p-0"
                                      href="#!"
                                    >
                                      <span className="fa-solid fa-pen" />
                                    </a>
                                  </div>
                                  <p className="text-body-highlight mb-0">
                                    The female circus horse-rider is a recurring
                                    subject in Chagall’s work. In 1926 the art
                                    dealer Ambroise Vollard invited Chagall to
                                    make a project based on the circus. They
                                    visited Paris’s historic Cirque d’Hiver
                                    Bouglione together; Vollard lent Chagall his
                                    private box seats. Chagall completed 19
                                    gouaches Chagall’s work. In 1926 the art
                                    dealer Ambroise Vollard invited Chagall to
                                    make a project based on the circus.
                                  </p>
                                </div>
                                <div className="mb-7">
                                  <h4 className="mb-3">Subtasks</h4>
                                  <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                      <input
                                        className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3"
                                        type="checkbox"
                                        id="subtaskundefined1"
                                      />
                                      <label
                                        className="form-check-label mb-0 fs-8"
                                        htmlFor="subtaskundefined1"
                                      >
                                        Study Dragons
                                      </label>
                                    </div>
                                    <div className="hover-actions end-0">
                                      <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                        <span className="fa-solid fa-pencil" />
                                      </button>
                                      <button className="btn btn-sm text-body-tertiary px-0">
                                        <span className="fa-solid fa-xmark fs-8" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                      <input
                                        className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3"
                                        type="checkbox"
                                        id="subtaskundefined2"
                                      />
                                      <label
                                        className="form-check-label mb-0 fs-8"
                                        htmlFor="subtaskundefined2"
                                      >
                                        Procrastinate a bit
                                      </label>
                                    </div>
                                    <div className="hover-actions end-0">
                                      <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                        <span className="fa-solid fa-pencil" />
                                      </button>
                                      <button className="btn btn-sm text-body-tertiary px-0">
                                        <span className="fa-solid fa-xmark fs-8" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                      <input
                                        className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3"
                                        type="checkbox"
                                        id="subtaskundefined3"
                                      />
                                      <label
                                        className="form-check-label mb-0 fs-8"
                                        htmlFor="subtaskundefined3"
                                      >
                                        Staring at the notebook for 5 mins
                                      </label>
                                    </div>
                                    <div className="hover-actions end-0">
                                      <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                        <span className="fa-solid fa-pencil" />
                                      </button>
                                      <button className="btn btn-sm text-body-tertiary px-0">
                                        <span className="fa-solid fa-xmark fs-8" />
                                      </button>
                                    </div>
                                  </div>
                                  <a className="fw-bold fs-9" href="#!">
                                    <span className="fas fa-plus me-1" />
                                    Add subtask
                                  </a>
                                </div>
                                <div className="mb-3">
                                  <div>
                                    <h4 className="mb-3">Files</h4>
                                  </div>
                                  <div className="border-top px-0 pt-4 pb-3">
                                    <div className="me-n3">
                                      <div className="d-flex flex-between-center">
                                        <div className="d-flex mb-1">
                                          <span className="fa-solid fa-image me-2 text-body-tertiary fs-9" />
                                          <p className="text-body-highlight mb-0 lh-1">
                                            Silly_sight_1.png
                                          </p>
                                        </div>
                                        <div className="btn-reveal-trigger">
                                          <button
                                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-boundary="window"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-bs-reference="parent"
                                          >
                                            <span className="fas fa-ellipsis-h" />
                                          </button>
                                          <div className="dropdown-menu dropdown-menu-end py-2">
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item text-danger"
                                              href="#!"
                                            >
                                              Delete
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Download
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Report abuse
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                                        <span>768 kb</span>
                                        <span className="text-body-quaternary mx-1">
                                          |{" "}
                                        </span>
                                        <a href="#!">Shantinan Mekalan </a>
                                        <span className="text-body-quaternary mx-1">
                                          |{" "}
                                        </span>
                                        <span className="text-nowrap">
                                          21st Dec, 12:56 PM
                                        </span>
                                      </div>
                                      <img
                                        className="rounded-2"
                                        src="../assets/img/generic/40.png"
                                        alt=""
                                        style={{ maxWidth: 230 }}
                                      />
                                    </div>
                                  </div>
                                  <div className="border-top px-0 pt-4 pb-3">
                                    <div className="me-n3">
                                      <div className="d-flex flex-between-center">
                                        <div>
                                          <div className="d-flex align-items-center mb-1">
                                            <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary" />
                                            <p className="text-body-highlight mb-0 lh-1">
                                              All_images.zip
                                            </p>
                                          </div>
                                          <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                                            <span>12.8 mb</span>
                                            <span className="text-body-quaternary mx-1">
                                              |{" "}
                                            </span>
                                            <a href="#!">Yves Tanguy </a>
                                            <span className="text-body-quaternary mx-1">
                                              |{" "}
                                            </span>
                                            <span className="text-nowrap">
                                              19th Dec, 08:56 PM
                                            </span>
                                          </div>
                                        </div>
                                        <div className="btn-reveal-trigger">
                                          <button
                                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-boundary="window"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-bs-reference="parent"
                                          >
                                            <span className="fas fa-ellipsis-h" />
                                          </button>
                                          <div className="dropdown-menu dropdown-menu-end py-2">
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item text-danger"
                                              href="#!"
                                            >
                                              Delete
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Download
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Report abuse
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="border-top border-bottom px-0 pt-4 pb-3">
                                    <div className="me-n3">
                                      <div className="d-flex flex-between-center">
                                        <div>
                                          <div className="d-flex align-items-center mb-1 flex-wrap">
                                            <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary" />
                                            <p className="text-body-highlight mb-0 lh-1">
                                              Project.txt
                                            </p>
                                          </div>
                                          <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                                            <span>123 kb</span>
                                            <span className="text-body-quaternary mx-1">
                                              |{" "}
                                            </span>
                                            <a href="#!">Shantinan Mekalan </a>
                                            <span className="text-body-quaternary mx-1">
                                              |{" "}
                                            </span>
                                            <span className="text-nowrap">
                                              12th Dec, 12:56 PM
                                            </span>
                                          </div>
                                        </div>
                                        <div className="btn-reveal-trigger">
                                          <button
                                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-boundary="window"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-bs-reference="parent"
                                          >
                                            <span className="fas fa-ellipsis-h" />
                                          </button>
                                          <div className="dropdown-menu dropdown-menu-end py-2">
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item text-danger"
                                              href="#!"
                                            >
                                              Delete
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Download
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="#!"
                                            >
                                              Report abuse
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a className="fw-bold fs-9" href="#!">
                                  <span className="fas fa-plus me-1" />
                                  Add file(s)
                                </a>
                              </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="py-6">
                                <h4 className="mb-4 text-body-emphasis">
                                  Others Information
                                </h4>
                                <h5 className="text-body-highlight mb-2">
                                  Status
                                </h5>
                                <select
                                  className="form-select mb-4"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                                <h5 className="text-body-highlight mb-2">
                                  Due Date
                                </h5>
                                <div className="flatpickr-input-container mb-4">
                                  <input
                                    className="form-control datetimepicker ps-6"
                                    type="text"
                                    placeholder="Set the due date"
                                    data-options='{"disableMobile":true}'
                                  />
                                  <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
                                </div>
                                <h5 className="text-body-highlight mb-2">
                                  Reminder
                                </h5>
                                <div className="flatpickr-input-container mb-4">
                                  <input
                                    className="form-control datetimepicker ps-6"
                                    type="text"
                                    placeholder="Reminder"
                                    data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true,"static":true}'
                                  />
                                  <span className="uil uil-bell-school flatpickr-icon text-body-tertiary" />
                                </div>
                                <h5 className="text-body-highlight mb-2">
                                  Tag
                                </h5>
                                <div className="choices-select-container mb-6">
                                  <select
                                    className="form-select"
                                    data-choices="data-choices"
                                    multiple={true}
                                    data-options='{"removeItemButton":true,"placeholder":true}'
                                  >
                                    <option value="">
                                      Select organizer...
                                    </option>
                                    <option>
                                      Massachusetts Institute of Technology
                                    </option>
                                    <option>University of Chicago</option>
                                    <option>GSAS Open Labs At Harvard</option>
                                    <option>
                                      California Institute of Technology
                                    </option>
                                  </select>
                                  <span
                                    className="uil uil-tag-alt choices-icon text-body-tertiary"
                                    style={{ top: "26%" }}
                                  />
                                </div>
                                <div className="text-end mb-9">
                                  <button className="btn btn-phoenix-danger">
                                    Delete Task
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0">
                  <a className="fw-bold fs-9 mt-4" href="#!">
                    <span className="fas fa-plus me-1" />
                    Add new task
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-xxl-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title mb-1">
                    <h3 className="text-body-emphasis">Activity</h3>
                  </div>
                  <p className="text-body-tertiary mb-4">
                    Recent activity across all projects
                  </p>
                  <div className="timeline-vertical timeline-with-details">
                    <div className="timeline-item position-relative">
                      <div className="row g-md-3">
                        <div className="col-12 col-md-auto d-flex">
                          <div className="timeline-item-date order-1 order-md-0 me-md-4">
                            <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
                              01 DEC, 2023
                              <br className="d-none d-md-block" /> 10:30 AM
                            </p>
                          </div>
                          <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                            <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                              <span className="fa-solid fa-chess text-primary-dark fs-10" />
                            </div>
                            <span className="timeline-bar border-end border-dashed" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="timeline-item-content ps-6 ps-md-3">
                            <h5 className="fs-9 lh-sm">
                              Phoenix Template: Unleashing Creative
                              Possibilities
                            </h5>
                            <p className="fs-9">
                              by{" "}
                              <a className="fw-semibold" href="#!">
                                Shantinon Mekalan
                              </a>
                            </p>
                            <p className="fs-9 text-body-secondary mb-5">
                              Discover limitless creativity with the Phoenix
                              template! Our latest update offers an array of
                              innovative features and design options.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item position-relative">
                      <div className="row g-md-3">
                        <div className="col-12 col-md-auto d-flex">
                          <div className="timeline-item-date order-1 order-md-0 me-md-4">
                            <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
                              05 DEC, 2023
                              <br className="d-none d-md-block" /> 12:30 AM
                            </p>
                          </div>
                          <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                            <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                              <span className="fa-solid fa-dove text-primary-dark fs-10" />
                            </div>
                            <span className="timeline-bar border-end border-dashed" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="timeline-item-content ps-6 ps-md-3">
                            <h5 className="fs-9 lh-sm">
                              Empower Your Digital Presence: The Phoenix
                              Template Unveiled
                            </h5>
                            <p className="fs-9">
                              by{" "}
                              <a className="fw-semibold" href="#!">
                                Bookworm22
                              </a>
                            </p>
                            <p className="fs-9 text-body-secondary mb-5">
                              Unveiling the Phoenix template, a game-changer for
                              your digital presence. With its powerful features
                              and sleek design,
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item position-relative">
                      <div className="row g-md-3">
                        <div className="col-12 col-md-auto d-flex">
                          <div className="timeline-item-date order-1 order-md-0 me-md-4">
                            <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
                              15 DEC, 2023
                              <br className="d-none d-md-block" /> 2:30 AM
                            </p>
                          </div>
                          <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                            <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                              <span className="fa-solid fa-dungeon text-primary-dark fs-10" />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="timeline-item-content ps-6 ps-md-3">
                            <h5 className="fs-9 lh-sm">
                              Phoenix Template: Simplified Design, Maximum
                              Impact
                            </h5>
                            <p className="fs-9">
                              by{" "}
                              <a className="fw-semibold" href="#!">
                                Sharuka Nijibum
                              </a>
                            </p>
                            <p className="fs-9 text-body-secondary mb-0">
                              Introducing the Phoenix template, where simplified
                              design meets maximum impact. Elevate your digital
                              presence with its sleek and intuitive features.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="mx-n4 px-4 mx-lg-n8 px-lg-6 bg-body-emphasis pt-6 border-top">
              <div
                id="projectSummary"
                data-list='{"valueNames":["project","assigness","start","deadline","calculation","projectprogress","status","action"],"page":6,"pagination":true}'
              >
                <div className="row align-items-end justify-content-between pb-4 g-3">
                  <div className="col-auto">
                    <h3>Projects</h3>
                    <p className="text-body-tertiary lh-sm mb-0">
                      Brief summary of all projects
                    </p>
                  </div>
                </div>
                <div className="table-responsive ms-n1 ps-1 scrollbar">
                  <table className="table fs-9 mb-0 border-top border-translucent">
                    <thead>
                      <tr>
                        <th
                          className="sort white-space-nowrap align-middle ps-0"
                          scope="col"
                          data-sort="project"
                          style={{ width: "30%" }}
                        >
                          PROJECT NAME
                        </th>
                        <th
                          className="sort align-middle ps-3"
                          scope="col"
                          data-sort="assigness"
                          style={{ width: "10%" }}
                        >
                          ASSIGNESS
                        </th>
                        <th
                          className="sort align-middle ps-3"
                          scope="col"
                          data-sort="start"
                          style={{ width: "10%" }}
                        >
                          START DATE
                        </th>
                        <th
                          className="sort align-middle ps-3"
                          scope="col"
                          data-sort="deadline"
                          style={{ width: "15%" }}
                        >
                          DEADLINE
                        </th>
                        <th
                          className="sort align-middle ps-3"
                          scope="col"
                          data-sort="calculation"
                          style={{ width: "12%" }}
                        >
                          CALCULATION
                        </th>
                        <th
                          className="sort align-middle ps-3"
                          scope="col"
                          data-sort="projectprogress"
                          style={{ width: "5%" }}
                        >
                          PROGRESS
                        </th>
                        <th
                          className="sort align-middle ps-8"
                          scope="col"
                          data-sort="status"
                          style={{ width: "10%" }}
                        >
                          STATUS
                        </th>
                        <th
                          className="sort align-middle text-end"
                          scope="col"
                          style={{ width: "10%" }}
                        />
                      </tr>
                    </thead>
                    <tbody className="list" id="project-summary-table-body">
                      <tr className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 project">
                          <a className="fw-bold fs-8" href="#">
                            Making the Butterflies shoot each other dead
                          </a>
                        </td>
                        <td className="align-middle white-space-nowrap assigness ps-3">
                          <div className="avatar-group avatar-group-dense">
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/9.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/9.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Michael Jenkins
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/25.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/25.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Ansolo Lazinatov
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/32.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/32.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Jennifer Schramm
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle avatar-placeholder"
                                  src="../assets/img/team/avatar.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/avatar.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Kristine Cadena
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <div className="avatar avatar-s  rounded-circle">
                              <div className="avatar-name rounded-circle ">
                                <span>+3</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap start ps-3">
                          <p className="mb-0 fs-9 text-body">Dec 12, 2018</p>
                        </td>
                        <td className="align-middle white-space-nowrap deadline ps-3">
                          <p className="mb-0 fs-9 text-body">Dec 12, 2026</p>
                        </td>
                        <td className="align-middle white-space-nowrap calculation ps-3">
                          <p className="fw-bold text-body-emphasis fs-9 mb-0">
                            $4
                          </p>
                          <p className="fw-semibold fs-10 text-body-tertiary mb-0">
                            Cost
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap ps-3 projectprogress">
                          <p className="text-body-secondary fs-10 mb-0">
                            145 / 145
                          </p>
                          <div className="progress" style={{ height: 3 }}>
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "100%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap ps-8 status">
                          <div
                            className="progress progress-stack mt-3"
                            style={{ height: 3 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "30%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "5%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="5% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "45%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="45% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "15%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="15% Damage"
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 project">
                          <a className="fw-bold fs-8" href="#">
                            Project Doughnut Dungeon
                          </a>
                        </td>
                        <td className="align-middle white-space-nowrap assigness ps-3">
                          <div className="avatar-group avatar-group-dense">
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/22.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/22.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Woodrow Burton
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/28.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/28.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Ashley Garrett
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s">
                                <div className="avatar-name rounded-circle">
                                  <span>R</span>
                                </div>
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <div className="avatar-name rounded-circle">
                                        <span>R</span>
                                      </div>
                                    </div>
                                    <h6 className="text-white">Raymond Mims</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap start ps-3">
                          <p className="mb-0 fs-9 text-body">Jan 9, 2019</p>
                        </td>
                        <td className="align-middle white-space-nowrap deadline ps-3">
                          <p className="mb-0 fs-9 text-body">Dec 9, 2022</p>
                        </td>
                        <td className="align-middle white-space-nowrap calculation ps-3">
                          <button className="btn btn-phoenix-secondary square-icon-btn">
                            <span className="fas fa-plus" />
                          </button>
                        </td>
                        <td className="align-middle white-space-nowrap ps-3 projectprogress">
                          <p className="text-body-secondary fs-10 mb-0">
                            148 / 223
                          </p>
                          <div className="progress" style={{ height: 3 }}>
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "66.3677130044843%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap ps-8 status">
                          <div
                            className="progress progress-stack mt-3"
                            style={{ height: 3 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "20%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "15%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="5% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "45%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="45% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "30%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="15% Damage"
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 project">
                          <a className="fw-bold fs-8" href="#">
                            The Chewing Gum Attack
                          </a>
                        </td>
                        <td className="align-middle white-space-nowrap assigness ps-3">
                          <div className="avatar-group avatar-group-dense">
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/34.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/34.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">Jean Renoir</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/59.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/59.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Katerina Karenin
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap start ps-3">
                          <p className="mb-0 fs-9 text-body">Sep 4, 2019</p>
                        </td>
                        <td className="align-middle white-space-nowrap deadline ps-3">
                          <p className="mb-0 fs-9 text-body">Dec 4, 2021</p>
                        </td>
                        <td className="align-middle white-space-nowrap calculation ps-3">
                          <p className="fw-bold text-body-emphasis fs-9 mb-0">
                            $657k
                          </p>
                          <p className="fw-semibold fs-10 text-body-tertiary mb-0">
                            Estimation
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap ps-3 projectprogress">
                          <p className="text-body-secondary fs-10 mb-0">
                            277 / 539
                          </p>
                          <div className="progress" style={{ height: 3 }}>
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "51.39146567717996%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap ps-8 status">
                          <div
                            className="progress progress-stack mt-3"
                            style={{ height: 3 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "10%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "10%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="5% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "35%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="45% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "45%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="15% Damage"
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 project">
                          <a className="fw-bold fs-8" href="#">
                            Execution of Micky the foul mouse
                          </a>
                        </td>
                        <td className="align-middle white-space-nowrap assigness ps-3">
                          <div className="avatar-group avatar-group-dense">
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/1.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/1.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">Luis Bunuel</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle avatar-placeholder"
                                  src="../assets/img/team/avatar.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/avatar.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Kristine Cadena
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/5.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/5.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">Ricky Antony</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/11.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/11.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">Roy Anderson</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap start ps-3">
                          <p className="mb-0 fs-9 text-body">Nov 1, 2019</p>
                        </td>
                        <td className="align-middle white-space-nowrap deadline ps-3">
                          <p className="mb-0 fs-9 text-body">Dec 1, 2024</p>
                        </td>
                        <td className="align-middle white-space-nowrap calculation ps-3">
                          <button className="btn btn-phoenix-secondary square-icon-btn">
                            <span className="fas fa-plus" />
                          </button>
                        </td>
                        <td className="align-middle white-space-nowrap ps-3 projectprogress">
                          <p className="text-body-secondary fs-10 mb-0">
                            16 / 56
                          </p>
                          <div className="progress" style={{ height: 3 }}>
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "28.57142857142857%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap ps-8 status">
                          <div
                            className="progress progress-stack mt-3"
                            style={{ height: 3 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "45%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "15%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="5% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "20%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="45% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "20%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="15% Damage"
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 project">
                          <a className="fw-bold fs-8" href="#">
                            Harnessing stupidity from Jerry
                          </a>
                        </td>
                        <td className="align-middle white-space-nowrap assigness ps-3">
                          <div className="avatar-group avatar-group-dense">
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/21.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/21.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Michael Jenkins
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/23.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/23.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Kristine Cadena
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/25.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/25.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">Ricky Antony</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap start ps-3">
                          <p className="mb-0 fs-9 text-body">Dec 28, 2019</p>
                        </td>
                        <td className="align-middle white-space-nowrap deadline ps-3">
                          <p className="mb-0 fs-9 text-body">Nov 28, 2021</p>
                        </td>
                        <td className="align-middle white-space-nowrap calculation ps-3">
                          <button className="btn btn-phoenix-secondary square-icon-btn">
                            <span className="fas fa-plus" />
                          </button>
                        </td>
                        <td className="align-middle white-space-nowrap ps-3 projectprogress">
                          <p className="text-body-secondary fs-10 mb-0">
                            169 / 394
                          </p>
                          <div className="progress" style={{ height: 3 }}>
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "42.89340101522843%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap ps-8 status">
                          <div
                            className="progress progress-stack mt-3"
                            style={{ height: 3 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "35%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="5% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "20%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="45% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "15%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="15% Damage"
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 project">
                          <a className="fw-bold fs-8" href="#">
                            Water resistant mosquito killer gun
                          </a>
                        </td>
                        <td className="align-middle white-space-nowrap assigness ps-3">
                          <div className="avatar-group avatar-group-dense">
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/30.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/30.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Stanly Drinkwater
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle avatar-placeholder"
                                  src="../assets/img/team/avatar.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/avatar.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Kristine Cadena
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/59.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/59.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Katerina Karenin
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s  rounded-circle">
                                <img
                                  className="rounded-circle "
                                  src="../assets/img/team/31.webp"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <img
                                        className="rounded-circle border border-light-subtle"
                                        src="../assets/img/team/31.webp"
                                        alt=""
                                      />
                                    </div>
                                    <h6 className="text-white">
                                      Martina scorcese
                                    </h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                            <a
                              className="dropdown-toggle dropdown-caret-none d-inline-block"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <div className="avatar avatar-s">
                                <div className="avatar-name rounded-circle">
                                  <span>R</span>
                                </div>
                              </div>
                            </a>
                            <div
                              className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden"
                              style={{ width: 320 }}
                            >
                              <div className="position-relative">
                                <div
                                  className="bg-holder z-n1"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/bg/bg-32.png)",
                                    backgroundSize: "auto",
                                  }}
                                />
                                {/*/.bg-holder*/}
                                <div className="p-3">
                                  <div className="text-end">
                                    <button className="btn p-0 me-2">
                                      <span className="fa-solid fa-user-plus text-white" />
                                    </button>
                                    <button className="btn p-0">
                                      <span className="fa-solid fa-ellipsis text-white" />
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                      <div className="avatar-name rounded-circle">
                                        <span>R</span>
                                      </div>
                                    </div>
                                    <h6 className="text-white">Roy Anderson</h6>
                                    <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
                                      @tyrion222
                                    </p>
                                    <div className="d-flex flex-center mb-3">
                                      <h6 className="text-white mb-0">
                                        224{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          connections
                                        </span>
                                      </h6>
                                      <span
                                        className="fa-solid fa-circle text-body-tertiary mx-1"
                                        data-fa-transform="shrink-10 up-2"
                                      />
                                      <h6 className="text-white mb-0">
                                        23{" "}
                                        <span className="fw-normal text-light text-opacity-75">
                                          mutual
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-body-emphasis">
                                <div className="p-3 border-bottom border-translucent">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-phone" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                        <span className="fa-solid fa-message" />
                                      </button>
                                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                        <span className="fa-solid fa-video" />
                                      </button>
                                    </div>
                                    <button className="btn btn-phoenix-primary">
                                      <span className="fa-solid fa-envelope me-2" />
                                      Send Email
                                    </button>
                                  </div>
                                </div>
                                <ul className="nav d-flex flex-column py-3 border-bottom">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body d-inline-block"
                                        data-feather="clipboard"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        Assigned Projects
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link px-3 d-flex flex-between-center"
                                      href="#!"
                                    >
                                      {" "}
                                      <span
                                        className="me-2 text-body"
                                        data-feather="pie-chart"
                                      />
                                      <span className="text-body-highlight flex-1">
                                        View activiy
                                      </span>
                                      <span className="fa-solid fa-chevron-right fs-11" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-3 d-flex justify-content-between">
                                <a
                                  className="btn btn-link p-0 text-decoration-none"
                                  href="#!"
                                >
                                  Details{" "}
                                </a>
                                <a
                                  className="btn btn-link p-0 text-decoration-none text-danger"
                                  href="#!"
                                >
                                  Unassign{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap start ps-3">
                          <p className="mb-0 fs-9 text-body">Feb 24, 2020</p>
                        </td>
                        <td className="align-middle white-space-nowrap deadline ps-3">
                          <p className="mb-0 fs-9 text-body">Nov 24, 2021</p>
                        </td>
                        <td className="align-middle white-space-nowrap calculation ps-3">
                          <p className="fw-bold text-body-emphasis fs-9 mb-0">
                            $55k
                          </p>
                          <p className="fw-semibold fs-10 text-body-tertiary mb-0">
                            Budget
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap ps-3 projectprogress">
                          <p className="text-body-secondary fs-10 mb-0">
                            600 / 600
                          </p>
                          <div className="progress" style={{ height: 3 }}>
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "100%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle white-space-nowrap ps-8 status">
                          <div
                            className="progress progress-stack mt-3"
                            style={{ height: 3 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "24%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "5%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="5% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "35%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="45% Damage"
                              role="progressbar"
                            />
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "35%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="15% Damage"
                              role="progressbar"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                  <div className="col-auto d-flex">
                    <p
                      className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                      data-list-info="data-list-info"
                    />
                    <a className="fw-semibold" href="#!" data-list-view="*">
                      View all
                      <span
                        className="fas fa-angle-right ms-1"
                        data-fa-transform="down-1"
                      />
                    </a>
                    <a
                      className="fw-semibold d-none"
                      href="#!"
                      data-list-view="less"
                    >
                      View Less
                      <span
                        className="fas fa-angle-right ms-1"
                        data-fa-transform="down-1"
                      />
                    </a>
                  </div>
                  <div className="col-auto d-flex">
                    <button className="page-link" data-list-pagination="prev">
                      <span className="fas fa-chevron-left" />
                    </button>
                    <ul className="mb-0 pagination" />
                    <button
                      className="page-link pe-0"
                      data-list-pagination="next"
                    >
                      <span className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer position-absolute">
          <div className="row g-0 justify-content-between align-items-center h-100">
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 mt-2 mt-sm-0 text-body">
                Thank you for creating with Phoenix
                <span className="d-none d-sm-inline-block" />
                <span className="d-none d-sm-inline-block mx-1">|</span>
                <br className="d-sm-none" />
                2023 ©
                <a className="mx-1" href="https://themewagon.com/">
                  Themewagon
                </a>
              </p>
            </div>
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 text-body-tertiary text-opacity-85">v1.14.0</p>
            </div>
          </div>
        </footer>
        </div>
    </>
  );
};

export default Home;
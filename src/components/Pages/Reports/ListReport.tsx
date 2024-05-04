import React from 'react'

function ListReport() {
  return (
    <div className="content">
  <nav className="mb-2" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item">
        <a href="#!">Page 1</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#!">Page 2</a>
      </li>
      <li className="breadcrumb-item active">Default</li>
    </ol>
  </nav>
  <div className="pb-8">
    <h2 className="mb-4">Reports</h2>
    <div
      id="reports"
      data-list='{"valueNames":["title","text","priority","reportsby","reports","date"],"page":10,"pagination":true}'
    >
      <div className="row g-3 justify-content-between mb-2">
        <div className="col-12">
          <div className="d-md-flex justify-content-between">
            <div className="mb-3">
              <button className="btn btn-primary me-4">
                <span className="fas fa-plus me-2" />
                Create Report
              </button>
              <button className="btn btn-link text-body px-0">
                <span className="fa-solid fa-file-export fs-9 me-2" />
                Export{" "}
              </button>
            </div>
            <div className="d-flex mb-3">
              <div className="search-box me-2">
                <form
                  className="position-relative"
                  data-bs-toggle="search"
                  data-bs-display="static"
                >
                  <input
                    className="form-control search-input search"
                    type="search"
                    placeholder="Search by name"
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon" />
                </form>
              </div>
              <button
                className="btn px-3 btn-phoenix-secondary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#reportsFilterModal"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-reference="parent"
              >
                <span
                  className="fa-solid fa-filter text-primary"
                  data-fa-transform="down-3"
                />
              </button>
              <div className="modal fade" id="reportsFilterModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content border border-translucent">
                    <form id="addEventForm" autoComplete="off">
                      <div className="modal-header border-translucent p-4">
                        <h5 className="modal-title text-body-highlight fs-6 lh-sm">
                          Filter
                        </h5>
                        <button
                          className="btn p-1 text-danger"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span className="fas fa-times fs-9"> </span>
                        </button>
                      </div>
                      <div className="modal-body pt-4 pb-2 px-4">
                        <div className="mb-3">
                          <label
                            className="fw-bold mb-2 text-body-highlight"
                            htmlFor="priority"
                          >
                            Priority
                          </label>
                          <select className="form-select" id="priority">
                            <option value="urgent" selected>
                              Urgent
                            </option>
                            <option value="medium">Medium </option>
                            <option value="high">High</option>
                            <option value="low">Low</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label
                            className="fw-bold mb-2 text-body-highlight"
                            htmlFor="createDate"
                          >
                            Create Date
                          </label>
                          <select className="form-select" id="createDate">
                            <option value="today" selected>
                              Today
                            </option>
                            <option value="last7Days">Last 7 Days</option>
                            <option value="last30Days">Last 30 Days</option>
                            <option value="chooseATimePeriod">
                              Choose a time period
                            </option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label
                            className="fw-bold mb-2 text-body-highlight"
                            htmlFor="category"
                          >
                            Category
                          </label>
                          <select className="form-select" id="category">
                            <option value="salesReports" selected>
                              Sales Reports
                            </option>
                            <option value="hrReports">HR Reports</option>
                            <option value="marketingReports">
                              Marketing Reports
                            </option>
                            <option value="administrativeReports">
                              Administrative Reports
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">
                        <button
                          className="btn btn-sm btn-phoenix-primary px-4 fs-10 my-0"
                          type="submit"
                        >
                          {" "}
                          <span className="fas fa-arrows-rotate me-2 fs-10" />
                          Reset
                        </button>
                        <button
                          className="btn btn-sm btn-primary px-9 fs-10 my-0"
                          type="submit"
                        >
                          Done
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3 list" id="reportsList">
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="/reportDetail"
                    >
                      Purchasers and sellers
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-danger"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Purchasing-Related Vendors
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports by email
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Sales Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 30, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Useful Solutions
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-danger"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Obtaining leads today
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports by email
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      HR Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 20, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Category Products
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-success"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Based on the percentage of recipients
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports on Sales Orders
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Marketing Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 28, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Current Deals
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-success"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Sales for Today
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reviews of Products
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Sales Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 28, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Useful Solutions
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-info"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">Low</span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Obtaining leads today
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports by email
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      HR Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 27, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Current Deals
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-info"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">Low</span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Sums up the many existing businesses.
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports by email
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Service Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 26, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Lost of Deals
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-warning"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">High</span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Emails sent by users to all records,
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports on Deals
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Sales Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 25, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Important Accounts
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-info"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">Low</span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Contracts closed by a salesman
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports on Deals
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Marketing Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 25, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Analytics for Email
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-success"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Based on Status Sales Orders
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reviews of Products
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Sales Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 24, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Types of Deals
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-success"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Products support will stop this month
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports by email
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Marketing Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 23, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Category Products
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-warning"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">High</span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Based on the percentage of recipients
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports on Sales Orders
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Marketing Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 22, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Current Sales
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-danger"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Sales for Today
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reviews of Products
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Sales Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 22, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Important Accounts
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-danger"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Contracts closed by a salesman
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports on Deals
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      Marketing Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 21, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="border-bottom border-translucent">
                <div className="d-flex align-items-start mb-1">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                  <div className="d-sm-flex align-items-center ps-2">
                    <a
                      className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                      href="reports-details.html"
                    >
                      Useful Solutions
                    </a>
                    <div className="d-flex align-items-center">
                      <span
                        className="fa-solid fa-circle me-1 text-danger"
                        data-fa-transform="shrink-6 up-1"
                      />
                      <span className="fw-bold fs-9 text-body lh-2">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semibold text-body ms-4 text mb-4 ps-2">
                  Obtaining leads today
                </p>
              </div>
              <div className="row g-1 g-sm-3 mt-2 lh-1">
                <div className="col-12 col-sm-auto flex-1 text-truncate">
                  <a className="fw-semibold fs-9" href="#!">
                    <span className="fa-regular fa-folder me-2 reportsby" />
                    Reports by email
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="grid"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">
                      HR Reports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-2"
                      data-feather="clock"
                      style={{ strokeWidth: 2 }}
                    />
                    <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                      Dec 20, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between py-2 pe-0 fs-9 mt-2">
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
          <a className="fw-semibold d-none" href="#!" data-list-view="less">
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
          <button className="page-link pe-0" data-list-pagination="next">
            <span className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  </div>

</div>

  )
}

export default ListReport
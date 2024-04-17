import React from 'react'

const AddManager = () => {
  return (
<>
<div className="content">
  <h2 className="mb-2 lh-sm">Create new Manager</h2>
  <div className="row mb-9">
    <div className="col-12 col-xxl-17">
      <div
        className="card shadow-none border my-4"
        data-component-card="data-component-card"
      >
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-center">
            <div className="col-12 col-md">
            </div>
           
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="progress-tab-code">
           
          </div>
          <div className="p-4 code-to-copy">
            <div
              className="card theme-wizard mb-5"
              data-theme-wizard="data-theme-wizard"
            >
              <div className="card-header bg-body-highlight pt-3 pb-2 border-bottom-0">
                <ul className="nav justify-content-between nav-wizard">
                  <li className="nav-item">
                    <a
                      className="nav-link active fw-semibold"
                      href="#bootstrap-wizard-tab1"
                      data-bs-toggle="tab"
                      data-wizard-step={1}
                    >
                      <div className="text-center d-inline-block">
                        <span className="nav-item-circle-parent">
                          <span className="nav-item-circle">
                            <span className="fas fa-lock" />
                          </span>
                        </span>
                        <span className="d-none d-md-block mt-1 fs-9">
                          Account
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-semibold"
                      href="#bootstrap-wizard-tab2"
                      data-bs-toggle="tab"
                      data-wizard-step={2}
                    >
                      <div className="text-center d-inline-block">
                        <span className="nav-item-circle-parent">
                          <span className="nav-item-circle">
                            <span className="fas fa-user" />
                          </span>
                        </span>
                        <span className="d-none d-md-block mt-1 fs-9">
                          Personal
                        </span>
                      </div>
                    </a>
                  </li>
               
                  <li className="nav-item">
                    <a
                      className="nav-link fw-semibold"
                      href="#bootstrap-wizard-tab4"
                      data-bs-toggle="tab"
                      data-wizard-step={4}
                    >
                      <div className="text-center d-inline-block">
                        <span className="nav-item-circle-parent">
                          <span className="nav-item-circle">
                            <span className="fas fa-check" />
                          </span>
                        </span>
                        <span className="d-none d-md-block mt-1 fs-9">
                          Done
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body pt-4 pb-0">
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    role="tabpanel"
                    aria-labelledby="bootstrap-wizard-tab1"
                    id="bootstrap-wizard-tab1"
                  >
                    <form
                      id="wizardForm1"
                      data-wizard-form={1}
                    >
                      <div className="mb-2">
                        <label
                          className="form-label text-body"
                          htmlFor="bootstrap-wizard-wizard-name"
                        >
                          Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="John Smith"
                          id="bootstrap-wizard-wizard-name"
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="form-label"
                          htmlFor="bootstrap-wizard-wizard-email"
                        >
                          Email*
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email address"
                          pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
                          id="bootstrap-wizard-wizard-email"
                        />
                      </div>
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                          <div className="mb-2 mb-sm-0">
                            <label
                              className="form-label text-body"
                              htmlFor="bootstrap-wizard-wizard-password"
                            >
                              Password*
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              placeholder="Password"
                              id="bootstrap-wizard-wizard-password"
                              data-wizard-password="true"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-2">
                            <label
                              className="form-label text-body"
                              htmlFor="bootstrap-wizard-wizard-confirm-password"
                            >
                              Confirm Password*
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              name="confirmPassword"
                              placeholder="Confirm Password"
                              id="bootstrap-wizard-wizard-confirm-password"
                              data-wizard-confirm-password="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="terms"
                          id="bootstrap-wizard-wizard-checkbox"
                        />
                        <label
                          className="form-check-label text-body"
                          htmlFor="bootstrap-wizard-wizard-checkbox"
                        >
                          I accept the <a href="#!">terms </a>and{" "}
                          <a href="#!">privacy policy</a>
                        </label>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane"
                    role="tabpanel"
                    aria-labelledby="bootstrap-wizard-tab2"
                    id="bootstrap-wizard-tab2"
                  >
                    <form
                      id="wizardForm2"
                      data-wizard-form={2}
                    >
                      <div
                        className="row g-4 mb-4"
                        data-dropzone="data-dropzone"
                        data-options='{"maxFiles":1,"data":[{"name":"avatar.webp","size":"54kb","url":"../../assets/img/team"}]}'
                      >
                        <div className="fallback">
                          <input type="file" name="file" />
                        </div>
                        <div className="col-md-auto">
                          <div className="dz-preview dz-preview-single">
                            <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                              <div className="avatar avatar-4xl">
                                <img
                                  className="rounded-circle avatar-placeholder"
                                  src="../../assets/img/team/avatar.webp"
                                  alt="..."
                                  data-dz-thumbnail="data-dz-thumbnail"
                                />
                              </div>
                              <div className="dz-progress">
                                <span
                                  className="dz-upload"
                                  data-dz-uploadprogress=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md">
                          <div
                            className="dz-message dropzone-area px-2 py-3"
                            data-dz-message="data-dz-message"
                          >
                            <div className="text-center text-body-emphasis">
                              <h5 className="mb-2">
                                <span className="fa-solid fa-upload me-2" />
                                Upload Profile Picture
                              </h5>
                              <p className="mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm">
                                Upload a 300x300 jpg image with <br />a maximum
                                size of 400KB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          className="form-label"
                          htmlFor="bootstrap-wizard-gender"
                        >
                          Gender
                        </label>
                        <select
                          className="form-select"
                          name="gender"
                          id="bootstrap-wizard-gender"
                        >
                          <option value="">Select your gender ...</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label
                          className="form-label"
                          htmlFor="bootstrap-wizard-wizard-phone"
                        >
                          Phone
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          id="bootstrap-wizard-wizard-phone"
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="form-label"
                          htmlFor="bootstrap-wizard-wizard-datepicker"
                        >
                          Date of Birth
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder="d/m/y"
                          data-options='{"dateFormat":"d/m/y","disableMobile":true}'
                          id="bootstrap-wizard-wizard-datepicker"
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="form-label"
                          htmlFor="bootstrap-wizard-wizard-address"
                        >
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          id="bootstrap-wizard-wizard-address"
                          defaultValue={""}
                        />
                      </div>
                    </form>
                  </div>
             
                  <div
                    className="tab-pane"
                    role="tabpanel"
                    aria-labelledby="bootstrap-wizard-tab3"
                    id="bootstrap-wizard-tab4"
                   >
                    <div className="row flex-center pb-8 pt-4 gx-3 gy-4">
                      <div className="col-12 col-sm-auto">
                        <div className="text-center text-sm-start">
                          <img
                            className="d-dark-none"
                            src="../../assets/img/spot-illustrations/38.webp"
                            alt=""
                            width={220}
                          />
                          <img
                            className="d-light-none"
                            src="../../assets/img/spot-illustrations/dark_38.webp"
                            alt=""
                            width={220}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-auto">
                        <div className="text-center text-sm-start">
                          <h5 className="mb-3">You are all set!</h5>
                          <p className="text-body-emphasis fs-9">
                            Now you can access your account
                            <br />
                            anytime anywhere
                          </p>
                          <a
                            className="btn btn-primary px-6"
                            href="wizard.html"
                          >
                            Start Over
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-footer border-top-0"
                data-wizard-footer="data-wizard-footer"
              >
                <div className="d-flex pager wizard list-inline mb-0">
                  <button
                    className="d-none btn btn-link ps-0"
                    type="button"
                    data-wizard-prev-btn="data-wizard-prev-btn"
                  >
                    <span
                      className="fas fa-chevron-left me-1"
                      data-fa-transform="shrink-3"
                    />
                    Previous
                  </button>
                  <div className="flex-1 text-end">
                    <button
                      className="btn btn-primary px-6 px-sm-6"
                      type="submit"
                      data-wizard-next-btn="data-wizard-next-btn"
                    >
                      Next
                      <span
                        className="fas fa-chevron-right ms-1"
                        data-fa-transform="shrink-3"
                      >
                        {" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div
      className="modal fade"
      id="error-modal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: 500 }}
      >
        <div className="modal-content position-relative">
          <div className="modal-header border-gray-100 p-3">
            <div className="h4 text-body-secondary mb-0">Access Denied!</div>
            <button
              className="btn btn-link text-danger position-absolute top-0 end-0 mt-2 me-2"
              data-bs-dismiss="modal"
            >
              <span className="fas fa-times" />
            </button>
          </div>
          <div className="modal-body px-4 py-6">
            <div className="d-flex align-items-center">
              <img
                className="me-4"
                src="../../assets/img/icons/stop.png"
                alt=""
              />
              <div className="flex-1">
                <p className="mb-0 fw-semibold text-body-tertiary">
                  You do not have the link to access. Please start <br />
                  over to get access for the next session.
                  <br />
                  Thank You!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>

</>  
)
}

export default AddManager;
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { group } from '../../../Types/Group';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddOwner = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    birthdate: '',
    joiningdate: '',
    profilepicture: '',
    groupe: '',
    role:2
  });
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [groups, setGroups] = useState<group[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<group[]>([]);
  const [formErrors, setFormErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    birthdate: '',
    joiningdate: '',
    groupe: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'file') {
      const inputElement = e.target as HTMLInputElement;
      const file = inputElement.files && inputElement.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData({ ...formData, [e.target.name]: imageUrl });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      validateField(e.target.name, e.target.value);
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const formDataWithRole = {
          ...formData,
          role: 1,
        };
        const response = await axios.post('http://localhost:3000/user/createUserProfile', formDataWithRole);
        console.log(response.data);
  
        // SweetAlert for successful submission
        Swal.fire({
          title: "Success!",
          text: "New Owner added successfully!",
          icon: "success"
        });
        navigate('/listOwner')
  
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Invalid form');
    }
  };
  

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };


  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/group/getAllGroup"
      ); 
      const groupsData: group[] = response.data.map((item: any) => ({
        idgroup: item.idgroup,
        groupname: item.groupname,
        grouplocation: item.grouplocation,
        grouphead: item.grouphead,
      }));
      setGroups(groupsData);
      setFilteredGroups(groupsData);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };



  //validation
  const validateForm = () => {
    let valid = true;
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    return valid;
  };

  const validateField = (fieldName: string, value: string) => {
    let errors: any = { ...formErrors };
  
    switch (fieldName) {
      case 'firstname':
        errors.firstname = value.length < 3 ? 'First name must be at least 3 characters long' : '';
        break;
      case 'lastname':
        errors.lastname = value.length < 3 ? 'Last name must be at least 3 characters long' : '';
        break;
      case 'email':
        errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        errors.password = value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword = value !== formData.password ? 'Passwords do not match' : '';
        break;
      case 'address':
        errors.address = value.trim() === '' ? 'Address is required' : '';
        break;
      case 'phone':
        errors.phone = !/^\d{8}$/.test(value) ? 'Invalid phone number' : '';
        break;
      case 'birthdate':
        errors.birthdate = value.trim() === '' ? 'Date of birth is required' : '';
        break;
      case 'joiningdate':
        errors.joiningdate = value.trim() === '' ? 'Joining date is required' : '';
        break;
      case 'groupe':
        errors.groupe = value.trim() === '' ? 'Group is required' : '';
        break;
      default:
        break;
    }
  
    setFormErrors(errors);
  };
  
  
  return (
    <>
      <div className="content">
        <h2 className="mb-2 lh-sm">Create new Owner</h2>
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

                  <form onSubmit={handleSubmit}>
                    <div className="card theme-wizard mb-5" data-theme-wizard="data-theme-wizard" >
                      <div className="card-header bg-body-highlight pt-3 pb-2 border-bottom-0">
                        <ul className="nav justify-content-between nav-wizard">
                          <li className="nav-item">
                            <a
                              className={`nav-link ${currentStep === 1 ? 'active fw-semibold' : 'fw-semibold'}`}
                              href="#bootstrap-wizard-tab1"
                              data-bs-toggle="tab"
                              data-wizard-step={1}
                            >
                              <div className="text-center d-inline-block">
                                <span className="nav-item-circle-parent ">
                                  <span className="nav-item-circle">
                                    <FontAwesomeIcon icon={faLock} />
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
                              className={`nav-link ${currentStep === 2 ? 'active fw-semibold' : 'fw-semibold'}`}
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
                              className={`nav-link ${currentStep === 3 ? 'active fw-semibold' : 'fw-semibold'}`}
                              href="#bootstrap-wizard-tab4"
                              data-bs-toggle="tab"
                              data-wizard-step={3}
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
                            className={`tab-pane ${currentStep === 1 ? 'active' : ''}`}
                            role="tabpanel"
                            aria-labelledby="bootstrap-wizard-tab1"
                            id="bootstrap-wizard-tab1"
                          >
                            <div className="row g-3 mb-3">
                              <div className="col-sm-6">
                                <label className="form-label text-body" htmlFor="bootstrap-wizard-wizard-name" >
                                  Name
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="firstname"
                                  value={formData.firstname}
                                  onChange={handleChange}
                                  placeholder="John "
                                  id="bootstrap-wizard-wizard-name"
                                />
                                 {formErrors.firstname.length > 0 && (
                                  <small className="text-danger">{formErrors.firstname}</small>
                                )}
                              </div>
                              <div className="col-sm-6">
                                <label className="form-label text-body" htmlFor="bootstrap-wizard-wizard-name" >
                                  Lastname
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="lastname"
                                  value={formData.lastname}
                                  onChange={handleChange}
                                  placeholder="Smith"
                                  id="bootstrap-wizard-wizard-name"
                                />
                                 {formErrors.lastname.length > 0 && (
                                  <small className="text-danger">{formErrors.lastname}</small>
                                )}
                              </div>
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
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
                                id="bootstrap-wizard-wizard-email"
                              />
                              {formErrors.email.length > 0 && (
                                <small className="text-danger">{formErrors.email}</small>
                              )}
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    data-wizard-password="true"
                                  />
                                  {formErrors.password.length > 0 && (
                                    <small className="text-danger">{formErrors.password}</small>
                                  )}
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
                                    onChange={handleChange}
                                  />
                                   {formErrors.confirmPassword.length > 0 && (
                                    <small className="text-danger">{formErrors.confirmPassword}</small>
                                  )}
                                </div>
                              </div>
                            </div>
                       


                          </div>
                          <div
                            className={`tab-pane ${currentStep === 2 ? 'active' : ''}`}
                            role="tabpanel"
                            aria-labelledby="bootstrap-wizard-tab2"
                            id="bootstrap-wizard-tab2"
                           >

                            <div
                              className="row g-4 mb-4"
                              data-dropzone="data-dropzone"
                              data-options='{"maxFiles":1,"data":[{"name":"avatar.webp","size":"54kb","url":"../../assets/img/team"}]}'
                            >
                              <div className="fallback">
                                <input
                                  type="file"
                                  className="form-control"
                                  id="profilePicture"
                                  name="profilepicture"
                                  onChange={handleChange}
                                />
                                
                              
                              </div>
                              <div className="col-md-auto">
                                <div className="dz-preview dz-preview-single">
                                  <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                    <div className="avatar avatar-4xl">
                                      {formData.profilepicture && (
                                        <img
                                          className="rounded-circle avatar-placeholder"
                                          src={formData.profilepicture}
                                          alt="..."
                                          data-dz-thumbnail="data-dz-thumbnail"
                                        />
                                      )}
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
                                value={formData.phone}
                                onChange={handleChange}
                                id="bootstrap-wizard-wizard-phone"
                              />
                                                {formErrors.phone.length > 0 && (
                                  <small className="text-danger">{formErrors.phone}</small>
                                )}
                            </div>
                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="bootstrap-wizard-wizard-datepicker"
                              >
                                Date of Birth
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                                placeholder="d/m/y"
                                id="bootstrap-wizard-wizard-datepicker"
                              />
                                                {formErrors.birthdate.length > 0 && (
                                  <small className="text-danger">{formErrors.birthdate}</small>
                                )}

                            </div>
                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="bootstrap-wizard-wizard-datepicker"
                              >
                                Joining Data
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="joiningdate"
                                value={formData.joiningdate}
                                onChange={handleChange}
                                placeholder="d/m/y"
                                id="bootstrap-wizard-wizard-datepicker"
                              />
                                                {formErrors.joiningdate.length > 0 && (
                                  <small className="text-danger">{formErrors.joiningdate}</small>
                                )}
                            </div>
                            <div className="mb-2">
  <label className="form-label" htmlFor="bootstrap-wizard-wizard-select-group">
    Group Name
  </label>
  <select
    className="form-select"
    name="groupe"
    value={formData.groupe}
    onChange={handleChange}
    id="bootstrap-wizard-wizard-select-group"
  >
    <option value="">Select Group</option>
    {filteredGroups.map(group => (
      <option key={group.idgroup} value={group.groupname}>{group.groupname}</option>
    ))}
  </select>
  {formErrors.groupe.length > 0 && (
                                  <small className="text-danger">{formErrors.groupe}</small>
                                )}
</div>

                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="bootstrap-wizard-wizard-address"
                              >
                                Address
                              </label>
                              <textarea
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                                className="form-control"
                                rows={4}
                                id="bootstrap-wizard-wizard-address"

                              />
                                                {formErrors.address.length > 0 && (
                                  <small className="text-danger">{formErrors.address}</small>
                                )}
                            </div>
                          </div>
                          <div
                            className={`tab-pane ${currentStep === 3 ? 'active' : ''}`}
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
                                  <h5 className="mb-3"></h5>
                                  <p className="text-body-emphasis fs-9">
                                    
                                    <br />
                                    
                                  </p>
                                
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="card-footer border-top-0" data-wizard-footer="data-wizard-footer">
                        <div className="d-flex pager wizard list-inline mb-0">
                          {currentStep !== 1 && (
                            <button
                              className="btn btn-link ps-0"
                              type="button"
                              onClick={() => setCurrentStep(currentStep - 1)}
                              data-wizard-prev-btn="data-wizard-prev-btn"
                            >
                              <span className="fas fa-chevron-left me-1" data-fa-transform="shrink-3" />
                              Previous
                            </button>
                          )}
                          <div className="flex-1 text-end">
                            {currentStep !== 3 && (
                              <button
                                className="btn btn-primary px-6"
                                type="button"
                                onClick={handleNext}
                                data-wizard-next-btn="data-wizard-next-btn"
                              >
                                Next
                                <span className="fas fa-chevron-right ms-1" data-fa-transform="shrink-3" />
                              </button>
                            )}

                            {currentStep === 3 && (
                              <button
                                className="btn btn-primary px-6"
                                type="submit"
                                data-wizard-next-btn="data-wizard-next-btn"
                              >
                                Submit
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddOwner;

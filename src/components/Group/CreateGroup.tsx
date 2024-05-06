import React, { ChangeEvent, FormEvent, useState } from "react";
import { group } from "../../Types/group.type";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreateGroup= () => {
  const [formData, setFormData] = useState({
    groupname: "",
    grouplocation: "",
    grouphead: "Yassine",
  });
  const navigate = useNavigate();

  const [groups, setGroups] = useState<group[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<group[]>([]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const inputElement = e.target as HTMLInputElement;
      const file = inputElement.files && inputElement.files[0];
      if (file) {
        setFormData({ ...formData, [name]: file });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("grouphead", formData.grouphead);

      const response = await axios.post(
        "http://localhost:3000/group/createGroup",
        formData
      );
      navigate("/listgroup");

      console.log(response.data);
      
      // Gérer la réponse de votre backend ici, par exemple, afficher un message de succès à l'utilisateur
    } catch (error) {
      console.error("Error:", error);
      // Gérer les erreurs ici, par exemple, afficher un message d'erreur à l'utilisateur
    }
  };

    return (
    <>
     
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
  <h2 className="mb-4">Create new Group</h2>
  <div className="row">
    <div className="col-xl-9">
      <form className="row g-3 mb-6"onSubmit={handleSubmit}>
        <div className="col-sm-6 col-md-8">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputGrid"
              type="text"
              placeholder="Project title"
              name="groupname"
              value={formData.groupname}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">Group name</label>
            
          </div>
          
          
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectTask">
            
              <option value={1}>Manager 1</option>
              <option value={2}>Manager 2</option>
              <option value={3}>Manager 3</option>
            </select>
            <label htmlFor="floatingSelectTask">Group Head</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
                <div className="form-floating ">
                  <input
                    className="form-control"
                    id="floatingInputBudget"
                    type="text"
                    placeholder="Budget"
                    name="grouplocation"
                    value={formData.grouplocation}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInputBudget">Location</label>
                </div>
              </div>
        {/* <div className="col-sm-6 col-md-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectTask">
              <option selected>Select Quiz</option>
              <option value={1}>Quiz One</option>
              <option value={2}>Quiz Two</option>
              <option value={3}>Quiz Three</option>
            </select>
            <label htmlFor="floatingSelectTask">Category</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectPrivacy">
              <option selected>Select Difficulty Level</option>
              <option value={1}>Beginner</option>
              <option value={2}>Intermidiate</option>
              <option value={3}>Expert</option>
            </select>
            <label htmlFor="floatingSelectPrivacy">Difficulty Level</label>
          </div>
        </div>
      
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
         
            <textarea
              className="form-control"
              id="floatingProjectOverview"
              placeholder="Leave a comment here"
              style={{ height: 50 }}
              defaultValue={""}
            />
            <label htmlFor="floatingProjectOverview">Invitations number</label>
          
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
         
            <textarea
              className="form-control"
              id="floatingProjectOverview"
              placeholder="Leave a comment here"
              style={{ height: 50 }}
              defaultValue={""}
            />
            <label htmlFor="floatingProjectOverview">Questions number</label>
          
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectAdmin">
              <option selected>Select Creator</option>
              <option value={1}>Manager One</option>
              <option value={2}>Manager Two</option>
              <option value={3}>Manager Three</option>
            </select>
            <label htmlFor="floatingSelectAdmin">Creator</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="flatpickr-input-container">
            <div className="form-floating">
              <input
                className="form-control datetimepicker"
                id="floatingInputStartDate"
                type="date"
                placeholder="end date"
                data-options='{"disableMobile":true}'
              />
              <label className="ps-6" htmlFor="floatingInputStartDate">
                Start date
              </label>
              <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="flatpickr-input-container">
            <div className="form-floating">
              <input
                className="form-control datetimepicker"
                id="floatingInputDeadline"
                type="date"
                placeholder="deadline"
                data-options='{"disableMobile":true}'
                
              />
              <label className="ps-6" htmlFor="floatingInputDeadline">
                Deadline
              </label>
              <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
            </div>
          </div>
        </div>
        <div className="col-12 gy-6">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingProjectOverview"
              placeholder="Leave a comment here"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="floatingProjectOverview">project overview</label>
          </div>
        </div>
        <div className="col-md-6 gy-6">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectClient">
              <option selected>Select client</option>
              <option value={1}>Client One</option>
              <option value={2}>Client Two</option>
              <option value={3}>Client Three</option>
            </select>
            <label htmlFor="floatingSelectClient">client</label>
          </div>
        </div>
        <div className="col-md-6 gy-6">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputBudget"
              type="text"
              placeholder="Budget"
            />
            <label htmlFor="floatingInputBudget">Budget</label>
          </div>
        </div>
        <div className="col-12 gy-6">
           <select
            className="form-select"
            id="organizerMultiple"
            data-choices="data-choices"
            data-options='{"removeItemButton":true,"placeholder":true}'
          >
            <option value="">Add tags</option>
            <option>Stupidity</option>
            <option>Jerry</option>
            <option>Not_the_mouse</option>
            <option>Rick</option>
            <option>Biology</option>
            <option>Neurology</option>
            <option>Brainlessness</option>
          </select>
        </div> */}
        <div className="col-12 gy-6">
          <div className="row g-3 justify-content-end">
            <div className="col-auto">
              <button className="btn btn-phoenix-primary px-5">Cancel</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary px-5 px-sm-15">
                Create Group
              </button>
            </div>
          </div>
        </div>
      </form>
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
    )
}
export default CreateGroup;
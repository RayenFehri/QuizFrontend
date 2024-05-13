import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../../../Types/User.type";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    groupname: "",
    grouplocation: "",
    grouphead: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      const userData = response.data.filter((user: any) => user.user.user_metadata.role === 2)
        .map((item: any) => ({
          id: item.user.id,
          email: item.user.email,
          phone: item.user.phone,
          profile: item.profile,
        }));
      setUsers(userData);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      await Swal.fire({
        title: "Group Created!",
        text: "Group has been created successfully.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error);
      await Swal.fire({
        title: "Error",
        text: "Failed to create group. Please try again.",
        icon: "error",
      });
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
            <form className="row g-3 mb-6" onSubmit={handleSubmit}>
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
                    required
                  />
                  <label htmlFor="floatingInputGrid">Group name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectTask"
                    name="grouphead"
                    value={formData.grouphead}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Group Head</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.profile.firstname} {user.profile.lastname}
                      </option>
                    ))}
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
                    required
                  />
                  <label htmlFor="floatingInputBudget">Location</label>
                </div>
              </div>
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
                  Thank you for using Quizo
                  <span className="d-none d-sm-inline-block" />
                  <span className="d-none d-sm-inline-block mx-1">|</span>
                  <br className="d-sm-none" />
                  2024 ©
                 
                </p>
              </div>
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 text-body-tertiary text-opacity-85">v1.0.0</p>
              </div>
            </div>
          </footer>
      </div>
    </>
  );
};

export default CreateGroup;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserId } from '../../../Services/Auth/auth.service';
import Swal from 'sweetalert2';

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    id: getCurrentUserId(),
    categoryname: '',
  });
  const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('categoryname', formData.categoryname);
      formDataToSend.append('id', formData.id); 

      const response = await axios.post('http://localhost:3000/category/createCategory', formData);
      console.log(response.data);
      setCategories([...categories, formData.categoryname]);
      setFormData({ ...formData, categoryname: '' });
      navigate('/listcategory');
      await Swal.fire({
        title: "Category Created!",
        text: "Category has been created successfully.",
        icon: "success",
      });
    } catch (error) {
      console.error('Error:', error);
      await Swal.fire({
        title: "Error",
        text: "Failed to create category. Please try again.",
        icon: "error",
      });
    }
  };
    return (
    <>
     
    <div className="content col-md-10 ">
  <nav className="mb-2 " aria-label="breadcrumb">
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
  <h2 className="mb-4">Create new Category</h2>
  <div className="row">
    <div className="col-xl-9">
      <form onSubmit={handleSubmit} className="row g-3 mb-6">
        <div className="col-sm-6 col-md-8">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputGrid"
              type="text"
              name='categoryname'
              placeholder="Project title"
              value={formData.categoryname}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInputGrid">Category name</label>
          </div>
        </div>
 
        <div className="col-12 gy-6">
          <div className="row g-3 justify-content-end">
            <div className="col-auto">
              <button className="btn btn-phoenix-primary px-5">Cancel</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary px-5 px-sm-15">
                Create Category
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
    )
}
export default CreateCategory;
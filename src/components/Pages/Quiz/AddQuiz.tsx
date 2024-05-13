import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { category } from '../../../Types/Category.type';
import Swal from 'sweetalert2';


const CreateQuiz= () => {
  const [formData, setFormData] = useState({
    id_category:'',
    quiztitle: '',
    material:'',
    duration:'',
    deadline:'',
    noofinvitations:'',
    difficultylevel:'',
    noofquestions:'',
    creator:'',

  });
  const [categories, setCategories] = useState<category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/category/findallCategories');
      const categoriesData: category[] = response.data.map((item: any) => ({
        id:item.id,
        categoryname: item.categoryname,
        idcategory: item.idcategory,
      }));
      setCategories(categoriesData);
      setFilteredCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file'){
      const inputElement = e.target as HTMLInputElement;
      const file = inputElement.files && inputElement.files[0];
      if(file){
          setFormData({...formData, [name]: file });
      }
    } else if (name === 'deadline') {
      const formattedDate = value.split('T')[0]; 
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('id_category', formData.id_category);
      formDataToSend.append('difficultylevel', formData.difficultylevel); 
      formDataToSend.append('deadline', formData.deadline); 
      formDataToSend.append('creator', formData.creator); 
  
      const response = await axios.post('http://localhost:3000/quiz/createQuiz', formData);
      console.log(response.data);
      navigate('/listquiz');
  
      await Swal.fire({
        title: "Quiz Created!",
        text: "Quiz has been created successfully.",
        icon: "success",
      });
    } catch (error) {
      console.error('Error:', error);
      await Swal.fire({
        title: "Error",
        text: "Failed to create quiz. Please try again.",
        icon: "error",
      });
    }
  };
  


    

    return (
    <>
     
    <div className="content col-md-8 ">
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
  <h2 className="mb-4">Create new Quiz</h2>
  <div className="row">
    <div className="col-xl-9">
      <form className="row g-3 mb-6" onSubmit={handleSubmit}>
        <div className="col-sm-6 col-md-8">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputGrid"
              type="text"
              placeholder="quiztitle"
              name="quiztitle"
              value={formData.quiztitle}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInputGrid">Quiz Title</label>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
       
          <div className="form-floating">
            <select className="form-select" id="floatingSelectTask" value={formData.id_category}
            onChange={handleChange} name="id_category">
                <option className='d-none' value="">Select Category</option>
            {filteredCategories.map((category)=>(
              <option key={category.idcategory}  value={category.idcategory}>{category.categoryname}</option>
            ))}
            </select>
   
            <label htmlFor="floatingSelectTask">Category</label>
          </div>
            
        </div>
            
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectPrivacy" defaultValue="Beginner" name="difficultylevel"
                    value={formData.difficultylevel}
                    onChange={handleChange} required>
              <option className='d-none' value="">Select difficulty level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermidiate">Intermidiate</option>
              <option value="Expert">Expert</option>
            </select>
            <label htmlFor="floatingSelectPrivacy">Difficulty Level</label>
          </div>
        </div>
      
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
         
            <input
              className="form-control"
              id="floatingProjectOverview"
              placeholder="Leave a comment here"
              style={{ height: 50 }}
              
              name="noofinvitations"
              value={formData.noofinvitations}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingProjectOverview">Invitations number</label>
          
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
         
            <input
              className="form-control"
              id="floatingProjectOverview"
              placeholder="Leave a comment here"
              style={{ height: 50 }}
              
              name="noofquestions"
              value={formData.noofquestions}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingProjectOverview">Questions number</label>
          
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating ">
          <input
              className="form-control"
              id="floatingInputBudget"
              type="text"
              placeholder="Budget"
              name="material"
              value={formData.material}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInputBudget">Material</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="flatpickr-input-container">
            <div className="form-floating">
              <input
                className="form-control datetimepicker"
                id="floatingInputStartDate"
                type="time"
                data-options='{"disableMobile":false}'
                name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              />
              <label className="ps-6" htmlFor="floatingInputStartDate">
                Duration
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
                name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              />
              <label className="ps-6" htmlFor="floatingInputDeadline">
                Deadline
              </label>
              <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
            </div>
          </div>
        </div>
 
        <div className="col-12 gy-6">
          <div className="row g-3 justify-content-end">
            <div className="col-auto">
              <button className="btn btn-phoenix-primary px-5">Cancel</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary px-5 px-sm-15 " type="submit">
                Create Quiz
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
export default CreateQuiz;
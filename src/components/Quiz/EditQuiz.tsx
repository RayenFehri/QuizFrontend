import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { quiz } from '../../Types/quiz.type';
import { category } from '../../Types/category.type';
import axios from 'axios';

const EditQuiz= () => {
  const { idquiz } = useParams();
  const [quizData, setQuizData] = useState<quiz | null>(null);
  const [filteredCategories, setFilteredCategories] = useState<category[]>([]);
  const [categories, setCategories] = useState<category[]>([]);
  const [quizTitle, setquizTitle] = useState<string>(''); 
  const [quizDifficultyLevel, setquizDifficultyLevel] = useState<string>(''); 
  const [quizNoofInvitations, setquizNoofInvitations] = useState<string>(''); 
  const [quizNoofQuestions, setquizNoofQuestions] = useState<string>(''); 
  const [quizMaterial, setquizMaterial] = useState<string>(''); 
  const [quizDuration, setquizDuration] = useState<string>(''); 
  const [quizDeadline, setquizDeadline] = useState<string>(''); 
  const [quizCreator, setquizCreator] = useState<string>('Firas'); 
  const [quizidCategory, setquizidCategory] = useState<string>(''); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/quiz/findOneQuiz/${idquiz}`)
      .then((res) => res.json())
      .then((data: any) => {
        console.log('Data fetched from the API:', data); // Ajoutez ce log pour voir les données récupérées
        setQuizData(data);
        if (data) {
          setquizTitle(data.quiztitle);
          setquizDifficultyLevel(data.difficultylevel);
          setquizNoofInvitations(data.noofinvitations);
          setquizNoofQuestions(data.noofquestions);
          setquizMaterial(data.material);
          setquizDuration(data.duration);
          setquizDeadline(data.deadline);
          setquizCreator(data.creator);
          setquizidCategory(data.id_category);



        }
      })
      .catch((error) => console.error('Error fetching quiz details:', error));
  }, [idquiz]);
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
  if (!quizData) {
    return <div>Loading...</div>;
  }
  

  const handleUpdate = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/quiz/updateQuiz/${idquiz}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quiztitle: quizTitle, 
          id_category:quizidCategory,
          noofquestions: quizNoofQuestions,
          duration: quizDuration,
          noofinvitations: quizNoofInvitations,
          material: quizMaterial,
          deadline: quizDeadline,
          difficultylevel: quizDifficultyLevel,
          creator: quizCreator
        }),
      });

      if (response.ok) {
        console.log('Quiz updated successfully!');
        navigate('/listquiz');
      } else {
        console.error('Error updating quiz');
      }
    } catch (error) {
      console.error('Unexpected error updating quiz:', error);
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
  <h2 className="mb-4">Edit Quiz</h2>
  <div className="row">
    <div className="col-xl-9">
      <form className="row g-3 mb-6" onSubmit={handleUpdate}>
        <div className="col-sm-6 col-md-8">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputGrid"
              type="text"
              placeholder="Project title"
              value={quizTitle}
                     onChange={(e) => setquizTitle(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">New Quiz Title</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
          <select
      className="form-select"
      id="floatingSelectTask"
      value={quizidCategory}
      onChange={(e) => setquizidCategory(e.target.value)}
      name='id_category'
    >
      <option className='d-none' value="">Select Category</option>
      {categories.map((category) => (
        <option key={category.idcategory}  value={category.idcategory}>{category.categoryname}</option>
      ))}
    </select>
            <label htmlFor="floatingSelectTask">Category</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectPrivacy">
              <option className='d-none' value="">Select Difficulty Level</option>
              <option value={1}>Beginner</option>
              <option value={2}>Intermidiate</option>
              <option value={3}>Expert</option>
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
              value={quizNoofInvitations}
              onChange={(e) => setquizNoofInvitations(e.target.value)} 
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
              value={quizNoofQuestions}
              onChange={(e) => setquizNoofQuestions(e.target.value)} 
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
              value={quizMaterial}
              onChange={(e) => setquizMaterial(e.target.value)} 
              
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
                value={quizDuration}
                onChange={(e) => setquizDuration(e.target.value)} 
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
                value={quizDeadline}
                onChange={(e) => setquizDeadline(e.target.value)} 
                
              />
              <label className="ps-6" htmlFor="floatingInputDeadline">
                Deadline
              </label>
              <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
            </div>
          </div>
        </div>
        {/* <div className="col-12 gy-6">
          <div className="form-floating">
            <input
            type="file"
              className="form-control"
              id="floatingProjectOverview"
              placeholder="Leave a comment here"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="floatingProjectOverview">project overview</label>
          </div>
        </div> */}
       
    
        {/* <div className="col-12 gy-6">
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
              <button className="btn btn-primary px-5 px-sm-15"  type="submit">
                Update Quiz
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
export default EditQuiz;
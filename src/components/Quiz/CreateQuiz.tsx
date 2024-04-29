import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { category } from "../../Types/category.type";

const CreateQuiz = () => {
  const [formData, setFormData] = useState({
    id_category: "",
    quiztitle: "",
    material: "",
    duration: "",
    deadline: "",
    noofinvitations: "",
    difficultylevel: "",
    noofquestions: "",
    creator: "yassine",
  });
  const [categories, setCategories] = useState<category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/category/findallCategories"
      );
      const categoriesData: category[] = response.data.map((item: any) => ({
        id: item.id,
        categoryname: item.categoryname,
        idcategory: item.idcategory,
      }));
      setCategories(categoriesData);
      setFilteredCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<string[]>([]);

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
    } else if (name === "deadline") {
      // If the input is for deadline, format the date as YYYY-MM-DD
      const formattedDate = value.split("T")[0]; // Get the date part from the ISO string
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id_category", formData.id_category);
      formDataToSend.append("difficultylevel", formData.difficultylevel);
      formDataToSend.append("deadline", formData.deadline);
      formDataToSend.append("creator", formData.creator);

      const response = await axios.post(
        "http://localhost:3000/quiz/createQuiz",
        formData
      );
      console.log(response.data);
      navigate("/listquiz");
      // Gérer la réponse de votre backend ici, par exemple, afficher un message de succès à l'utilisateur
    } catch (error) {
      console.error("Error:", error);
      // Gérer les erreurs ici, par exemple, afficher un message d'erreur à l'utilisateur
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
                  />
                  <label htmlFor="floatingInputGrid">Quiz Title</label>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectTask"
                    value={formData.id_category}
                    onChange={handleChange}
                    name="id_category"
                  >
                    <option className="d-none" value="">
                      Select Category
                    </option>
                    {filteredCategories.map((category) => (
                      <option
                        key={category.idcategory}
                        value={category.idcategory}
                      >
                        {category.categoryname}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="floatingSelectTask">Category</label>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectPrivacy"
                    defaultValue="Beginner"
                    name="difficultylevel"
                    value={formData.difficultylevel}
                    onChange={handleChange}
                  >
                    <option className="d-none" value="">
                      Select difficulty level
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Expert">Expert</option>
                  </select>
                  <label htmlFor="floatingSelectPrivacy">
                    Difficulty Level
                  </label>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatingProjectOverview"
                    placeholder="Leave a comment here"
                    style={{ height: 50 }}
                    name="noofinvitations"
                    value={formData.noofinvitations}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingProjectOverview">
                    Invitations number
                  </label>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatingProjectOverview"
                    placeholder="Leave a comment here"
                    style={{ height: 50 }}
                    name="noofquestions"
                    value={formData.noofquestions}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingProjectOverview">
                    Questions number
                  </label>
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
                    <button className="btn btn-phoenix-primary px-5">
                      Cancel
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary px-5 px-sm-15 "
                      type="submit"
                    >
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
export default CreateQuiz;

import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { quiz } from "../../Types/quiz.type";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "../Pages/Home/Home";

const Quizes = () => {
  const [quizzes, setQuizzes] = useState<quiz[]>([]);

  const [filteredQuizzes, setFilteredQuizzes] = useState<quiz[]>([]);

  const scrollPositionRef = useRef<number>(0); 

  useEffect(() => {
    fetchQuizes();
  }, []);

  const fetchQuizes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/quiz/findallQuizes');
      const quizzesData: quiz[] = response.data.map((item: any) => ({
        id_category:item.id_category,
        idquiz: item.idquiz,
        quiztitle: item.quiztitle,
        material : item.material,
        duration: item.duration,
        deadline: item.deadline,
        noofinvitations:item.noofinvitations,
        difficultylevel: item.difficultylevel,
        noofquestions: item.noofquestions,
        creator: item.creator,

      }));
      setQuizzes(quizzesData);
      setFilteredQuizzes(quizzesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = quizzes.filter(
      (quiz) => quiz.quiztitle?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredQuizzes(filter);
  };
  const handleRemoveQuiz = async (idquiz: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/quiz/deleteQuiz/${idquiz}`);
      if (response.status === 200) {
        // Remove the category from the list
        setQuizzes(quizzes.filter((quiz) => quiz.idquiz !== idquiz));
        setFilteredQuizzes(filteredQuizzes.filter((quiz) => quiz.idquiz !== idquiz));
        console.log('Quiz removed successfully!');
      } else {
        console.error('Error removing quiz');
      }
    } catch (error) {
      console.error('Unexpected error removing quiz:', error);
    }
  };

    return (
        <>
<div className="content"> 
  <div className="">
    {/* ----------------------- Little Navbar (page1 page2 default)-----------------*- */}
    <nav className="mb-2"  aria-label="breadcrumb ">
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
    {/* ----------------------- List of all quizes ------------------------------------- */}
    <div className="mb-9 ">
      <div
        id="projectSummary"
        data-list='{"valueNames":["projectName","assigness","start","deadline","task","projectprogress","status","action"],"page":6,"pagination":true}'
      >
        <div className="row mb-4 gx-6 gy-3 align-items-center ">
          <div className="col-auto">
            <h2 className="mb-0">
              Quizes
              <span className="fw-normal text-body-tertiary ms-3">({quizzes.length})</span>
            </h2>
          </div>
          <div className="col-auto ">
            <a className="btn btn-primary px-5" href="/createquiz">
              <i className="fa-solid fa-plus me-2" />
              Create new quiz
            </a>
          </div>
        </div>
        <div className="row g-3 justify-content-between align-items-end mb-4 ">
          
          {/* ------------------- All , ongoing , Finished , Postponed .... -------------------------------------------- */}

          <div className="col-12 col-sm-auto ">
            <ul className="nav nav-links mx-n2">
              <li className="nav-item">
                <a
                  className="nav-link px-2 py-1 active"
                  aria-current="page"
                  href="#"
                >
                  <span>All</span>
                  <span className="text-body-tertiary fw-semibold">({quizzes.length})</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-auto">
            <div className="d-flex align-items-center">
              {/*  ------------------------------------------Search Bar------------------------------------------------- */}
              <div className="search-box me-3">
                <form
                  className="position-relative"
                  data-bs-toggle="search"
                  data-bs-display="static"
                >
                  <input
                    className="form-control search-input search"
                    type="search"
                    placeholder="Search Quiz"
                    aria-label="Search"
                    onChange={handleChange}
                  />
                  <span className="fas fa-search search-box-icon" />
                </form>
              </div>
              {/* ----------------------------------------------------------------------- */}
              <a
                className="btn btn-phoenix-primary px-3 me-1 border-0 text-body"
                href="project-list-view.html"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="List view"
              >
                <span className="fa-solid fa-list fs-10" />
              </a>
              <a
                className="btn btn-phoenix-primary px-3 me-1"
                href="project-board-view.html"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Board view"
              >
                {/* -------------------------- Button List View --------------------------- */}
                <svg
                  width={9}
                  height={9}
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.5C0 0.223857 0.223858 0 0.5 0H1.83333C2.10948 0 2.33333 0.223858 2.33333 0.5V1.83333C2.33333 2.10948 2.10948 2.33333 1.83333 2.33333H0.5C0.223857 2.33333 0 2.10948 0 1.83333V0.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.33333 0.5C3.33333 0.223857 3.55719 0 3.83333 0H5.16667C5.44281 0 5.66667 0.223858 5.66667 0.5V1.83333C5.66667 2.10948 5.44281 2.33333 5.16667 2.33333H3.83333C3.55719 2.33333 3.33333 2.10948 3.33333 1.83333V0.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.66667 0.5C6.66667 0.223857 6.89052 0 7.16667 0H8.5C8.77614 0 9 0.223858 9 0.5V1.83333C9 2.10948 8.77614 2.33333 8.5 2.33333H7.16667C6.89052 2.33333 6.66667 2.10948 6.66667 1.83333V0.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 3.83333C0 3.55719 0.223858 3.33333 0.5 3.33333H1.83333C2.10948 3.33333 2.33333 3.55719 2.33333 3.83333V5.16667C2.33333 5.44281 2.10948 5.66667 1.83333 5.66667H0.5C0.223857 5.66667 0 5.44281 0 5.16667V3.83333Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.33333 3.83333C3.33333 3.55719 3.55719 3.33333 3.83333 3.33333H5.16667C5.44281 3.33333 5.66667 3.55719 5.66667 3.83333V5.16667C5.66667 5.44281 5.44281 5.66667 5.16667 5.66667H3.83333C3.55719 5.66667 3.33333 5.44281 3.33333 5.16667V3.83333Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.66667 3.83333C6.66667 3.55719 6.89052 3.33333 7.16667 3.33333H8.5C8.77614 3.33333 9 3.55719 9 3.83333V5.16667C9 5.44281 8.77614 5.66667 8.5 5.66667H7.16667C6.89052 5.66667 6.66667 5.44281 6.66667 5.16667V3.83333Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 7.16667C0 6.89052 0.223858 6.66667 0.5 6.66667H1.83333C2.10948 6.66667 2.33333 6.89052 2.33333 7.16667V8.5C2.33333 8.77614 2.10948 9 1.83333 9H0.5C0.223857 9 0 8.77614 0 8.5V7.16667Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.33333 7.16667C3.33333 6.89052 3.55719 6.66667 3.83333 6.66667H5.16667C5.44281 6.66667 5.66667 6.89052 5.66667 7.16667V8.5C5.66667 8.77614 5.44281 9 5.16667 9H3.83333C3.55719 9 3.33333 8.77614 3.33333 8.5V7.16667Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.66667 7.16667C6.66667 6.89052 6.89052 6.66667 7.16667 6.66667H8.5C8.77614 6.66667 9 6.89052 9 7.16667V8.5C9 8.77614 8.77614 9 8.5 9H7.16667C6.89052 9 6.66667 8.77614 6.66667 8.5V7.16667Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="btn btn-phoenix-primary px-3"
                href="project-card-view.html"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Card view"
              >
                <svg
                  width={9}
                  height={9}
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.5C0 0.223858 0.223858 0 0.5 0H3.5C3.77614 0 4 0.223858 4 0.5V3.5C4 3.77614 3.77614 4 3.5 4H0.5C0.223858 4 0 3.77614 0 3.5V0.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 5.5C0 5.22386 0.223858 5 0.5 5H3.5C3.77614 5 4 5.22386 4 5.5V8.5C4 8.77614 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5V5.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 0.5C5 0.223858 5.22386 0 5.5 0H8.5C8.77614 0 9 0.223858 9 0.5V3.5C9 3.77614 8.77614 4 8.5 4H5.5C5.22386 4 5 3.77614 5 3.5V0.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 5.5C5 5.22386 5.22386 5 5.5 5H8.5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5V5.5Z"
                    fill="currentColor"
                  />
                </svg>
                {/* ----------------------------------------------------------------------------------- */}

              </a>
            </div>
          </div>
        </div>
        <div className="table-responsive scrollbar ">
          <table className="table fs-9 mb-0 border-top border-translucent  ">
            <thead>
              <tr>
                <th
                  className="sort white-space-nowrap align-middle ps-0"
                  scope="col"
                  data-sort="projectName"
                  style={{ width: "30%" }}
                >
                  QUIZ TITLE
                </th>
                <th
                  className="sort align-middle ps-3"
                  scope="col"
                  data-sort="assigness"
                  style={{ width: "10%" }}
                >
                  INVITES
                </th>
                <th
                  className="sort align-middle ps-3"
                  scope="col"
                  data-sort="start"
                  style={{ width: "10%" }}
                >
                  DURATION
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
                  data-sort="task"
                  style={{ width: "12%" }}
                >
                  DIFFICULTY
                </th>
                <th
                  className="sort align-middle ps-3"
                  scope="col"
                  data-sort="projectprogress"
                  style={{ width: "5%" }}
                >
                  QUESTIONS
                </th>
                <th
                  className="sort align-middle text-end"
                  scope="col"
                  data-sort="statuses"
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
            <tbody className="list " id="project-list-table-body">
            {filteredQuizzes.map((quiz,index)=>
              <tr key={quiz.idquiz} className="position-static">
                <td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <Link className="fw-bold fs-8" to={`/questionquiz/${quiz.idquiz}`}>
                  {quiz.quiztitle}
                  </Link>
                </td>
                <td className="align-middle white-space-nowrap assigness ps-5 py-4 ">
                  <div className="avatar-group avatar-group-dense">
                    <a
                      className="dropdown-toggle dropdown-caret-none d-inline-block"
                      href="#"
                    >
                      {quiz.noofinvitations}
                    </a>
                    
                  </div>
                </td>
                <td className="align-middle white-space-nowrap start ps-4 py-4">
                  <p className="mb-0 fs-9 text-body">{quiz.duration}</p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4 ">
                  <p className="mb-0 fs-9 text-body ">{quiz.deadline.toLocaleString()}</p>
                </td>
                <td className="align-middle white-space-nowrap task ps-4 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">{quiz.difficultylevel}</p>
                </td>
                <td className="align-middle white-space-nowrap task ps-7 py-4">
                  <p className="mb-0 fs-9 text-body">{quiz.noofquestions}</p>
                  
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                    completed
                  </span>
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
                      <FontAwesomeIcon className='ms-4' icon={faEye} /> 
                        View
                        

                      </a>
                      <Link className="dropdown-item" to={`/editquiz/${quiz.idquiz}`}>
                      <FontAwesomeIcon className='ms-4' icon={faEdit} /> 

                        Edit

                      </Link>
                      <div className="dropdown-divider" />
                      <button  id="removeButton" className="dropdown-item text-danger" onClick={() => handleRemoveQuiz(quiz.idquiz)}>
                      <FontAwesomeIcon className='ms-4' icon={faTrashAlt} /> 

                        Remove   
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            )}
            
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between py-3 pe-0 fs-9 border-bottom border-translucent">
          <div className="d-flex">
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
          <div className="d-flex">
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
    {/* --------------------- Footer ----------------------------------------------------  */}
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
  </div>
</>

      

    )

}

export default Quizes;
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { quiz } from "../../../Types/Quiz.type";
import axios from "axios";
import { Link } from "react-router-dom";
import { getCurrentUser, getCurrentUserGroup } from "../../../Services/Auth/auth.service";
import { User } from "../../../Types/User.type";
import Swal from 'sweetalert2';


const Quizes = () => {
  const [quizzes, setQuizzes] = useState<quiz[]>([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<quiz[]>([]);
  const [magicLink, setMagicLink] = useState<string>('');
  const [isLinkSent, setIsLinkSent] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const userGroup = getCurrentUserGroup();
  const currentUser = getCurrentUser();
  const [toName, setToName] = useState('');
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [selectedQuizId, setSelectedQuizId] = useState('');



  const fetchQuizzes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/quiz/findallQuizes');
      const quizzesData: quiz[] = response.data.map((item: any) => ({
        id_category: item.id_category,
        idquiz: item.idquiz,
        quiztitle: item.quiztitle,
        material: item.material,
        duration: item.duration,
        deadline: item.deadline,
        noofinvitations: item.noofinvitations,
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
    // Afficher une alerte de confirmation
    const confirmDelete = await Swal.fire({
      title: `Are you sure?`,
      text: `You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
  
    if (confirmDelete.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:3000/quiz/deleteQuiz/${idquiz}`);
        if (response.status === 200) {
          // Supprimer le quiz de la liste
          setQuizzes(quizzes.filter((quiz) => quiz.idquiz !== idquiz));
          setFilteredQuizzes(filteredQuizzes.filter((quiz) => quiz.idquiz !== idquiz));
          console.log('Quiz removed successfully!');
  
          // Afficher une alerte de succès
          await Swal.fire({
            title: "Deleted!",
            text: "Quiz has been deleted.",
            icon: "success",
          });
        } else {
          console.error('Error removing quiz');
        }
      } catch (error) {
        console.error('Unexpected error removing quiz:', error);
      }
    } else if (confirmDelete.dismiss === Swal.DismissReason.cancel) {
      // Afficher une alerte d'annulation
      await Swal.fire({
        title: "Cancelled",
        text: `Quiz is safe :)`,
        icon: "error",
      });
    }
  };




  const fetchUserEmails = async () => {
    try {
      const response = await fetch('http://localhost:3000/user');
      const data: any[] = await response.json();
      let usersData: User[] = [];
      if (currentUser.authenticationData.user.user_metadata.role === 2) {
        // Si le rôle de l'utilisateur est 2
        usersData = data
          .filter(user => user.user.user_metadata.role === 3 && user.profile.groupe === userGroup) // Filtrer les utilisateurs ayant le rôle 3 et le même groupe que l'utilisateur actuel
          .map(item => ({
            id: item.user.id,
            email: item.user.email,
            phone: item.user.phone,
            profile: item.profile
          }));
      } else if (currentUser.authenticationData.user.user_metadata.role === 1 ) {
        // Si le rôle de l'utilisateur est 1
        usersData = data
          .filter(user => user.user.user_metadata.role === 3) // Filtrer les utilisateurs ayant le rôle 3
          .map(item => ({
            id: item.user.id,
            email: item.user.email,
            phone: item.user.phone,
            profile: item.profile
          }));
      }
      setUsers(usersData);
      setFilteredUsers(usersData);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };
  useEffect(() => {
    fetchQuizzes();
    fetchUserEmails();
  }, []);


  const handleQuizChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuizId(event.target.value);
  };


  useEffect(() => {
    if (selectedQuizId) {
      setMagicLink(`/quiz?quizId=${selectedQuizId}`);
    }
  }, [selectedQuizId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const emailList = selectedEmails;
      const promises = emailList.map(email => axios.post('http://localhost:3000/auth/signin-email', { email, redirectTo: magicLink, quizId: selectedQuizId }));
      await Promise.all(promises);

      setToName('');
      setSelectedEmails([]);
      setSelectedQuizId('');
      setMagicLink('');
      setIsLinkSent(true);

      // Afficher l'alerte lorsque le quiz est envoyé avec succès
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Quiz sended successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error: any) {
      console.error('Error sending magic link:', error.message);
    }
  };

  useEffect(() => {
    if (isLinkSent) {
      localStorage.setItem('userInfo', JSON.stringify({ emails: selectedEmails.join(','), selectedQuizId }));
    }
  }, [isLinkSent, selectedEmails, selectedQuizId]);


  const handleSelectToggle = () => {
    if (selectedEmails.length === users.length) {
      setSelectedEmails([]);
    } else {
      const allEmails: string[] = users
        .map(user => user.email)
        .filter((email): email is string => typeof email === 'string');

      setSelectedEmails(allEmails);
    }
  };

  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleEmailCheckboxChange = (email: string) => {
    const selectedIndex = selectedEmails.indexOf(email);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedEmails, email);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedEmails.slice(1));
    } else if (selectedIndex === selectedEmails.length - 1) {
      newSelected = newSelected.concat(selectedEmails.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedEmails.slice(0, selectedIndex),
        selectedEmails.slice(selectedIndex + 1)
      );
    }

    setSelectedEmails(newSelected);
  };



  return (
    <>
      <div className="content">
        <div className="">
          {/* ----------------------- Little Navbar (page1 page2 default)-----------------*- */}
          <nav className="mb-2" aria-label="breadcrumb ">
        
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

              </div>

              <div className="col-auto">
                <div className="d-flex flex-wrap gap-2">

                  <div className="col-auto ">
                    <a className="btn btn-primary px-5" href="/createquiz">
                      <i className="fa-solid fa-plus me-2" />
                      Create new quiz
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#sendQuizModal"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >              <span className="fas fa-envelope me-2" />

                      Send Quiz
                    </button>
                    <div className="modal fade" id="sendQuizModal" tabIndex={-1}>
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border border-translucent">
                          <form onSubmit={handleSubmit}>
                            <div className="modal-header border-translucent p-4">
                              <h5 className="modal-title text-body-highlight fs-6 lh-sm">
                                Send Quiz
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
                                  htmlFor="quizSelection"
                                >
                                  Select Quiz
                                </label>
                                <select
                                  id="quizSelection"
                                  className="form-select"
                                  value={selectedQuizId}
                                  onChange={handleQuizChange}
                                >
                                  <option value="">Select Quiz</option>
                                  {filteredQuizzes.map((quiz) => (
                                    <option key={quiz.idquiz} value={quiz.idquiz}>
                                      {quiz.quiztitle}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className={`dropdown ${isSelectOpen ? 'show' : ''}`}>
                                <button
                                  className="btn btn-secondary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  onClick={handleSelectOpen}
                                >
                                  To Emails
                                </button>
                                <ul
                                  className={`dropdown-menu ${isSelectOpen ? 'show' : ''}`}
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <label className="dropdown-item">
                                      <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        checked={selectedEmails.length === users.length}
                                        onChange={handleSelectToggle}
                                      />
                                      Select All
                                    </label>
                                  </li>
                                  {users.map((user) => (
                                    <li key={user.id}>
                                      <label className="dropdown-item">
                                        <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          value={user.email}
                                          checked={
                                            user.email ? selectedEmails.includes(user.email) : false
                                          }
                                          onChange={() => user.email && handleEmailCheckboxChange(user.email)}
                                        />
                                        {user.email}
                                      </label>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">

                              <button className="btn btn-sm btn-primary px-9 fs-10 my-0" type="submit">
                                Send
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                

                </div>
              </div>
              <div className="row g-3 justify-content-between align-items-end mb-4 ">


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



                    {/* ----------------------------------------------------------------------- */}

                    {/* -------------------------- Button List View --------------------------- */}



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
                    {filteredQuizzes.map((quiz, index) =>
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
                              <button id="removeButton" className="dropdown-item text-danger" onClick={() => handleRemoveQuiz(quiz.idquiz)}>
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

        </div>
      </div>
    </>



  )

}

export default Quizes;
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt ,faUsersCog} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import refreshIcon from "@iconify/icons-uil/refresh";
import usersAltIcon from "@iconify/icons-uil/users-alt";
import invoiceIcon from "@iconify/icons-uil/invoice";
import booksIcon from "@iconify/icons-uil/books";
import calendarIcon from "@iconify/icons-uil/calendar-alt";
import DonutChart from "react-donut-chart";
import clipboardAltIcon from "@iconify/icons-uil/clipboard-alt";
import { copyFile } from "fs";
import axios from "axios";
import { User } from "../../../Types/User.type";
import Quizes from "../../Quiz/ListQuiz";
import { quiz } from "../../../Types/quiz.type";

const Home = () => {
  const [quizzes, setQuizzes] = useState<quiz[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [employees, setEmployees] = useState<User[]>([]);
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
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data: any[]) => {
        console.log("Données utilisateurs reçues :", data);
        const usersData = data
        .filter(user => user.user.user_metadata.role == 2) // Filtrer les utilisateurs ayant le rôle 3
          .map(item => ({
            id: item.user.id,
            email: item.user.email,
            phone: item.user.phone,
            profile: item.profile
          }));
        setUsers(usersData);
      })
      .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data: any[]) => {
        console.log("Données utilisateurs reçues :", data);
        const employeesData = data
        .filter(user => user.user.user_metadata.role == 3) // Filtrer les utilisateurs ayant le rôle 3
          .map(item => ({
            id: item.user.id,
            email: item.user.email,
            phone: item.user.phone,
            profile: item.profile
          }));
        setEmployees(employeesData);
      })
      .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }, []);
  return (
    <>
    <div className="content">
      <div >
        <div className="row gy-3 mb-6 justify-content-between">
          <div className="col-md-9 col-auto">
            <h2 className="mb-2 text-body-emphasis">Admin Dashboard</h2>
            {/* <h5 className="text-body-tertiary fw-semibold">
              Here’s what’s going on at your business right now
            </h5> */}
          </div>
          <div className="col-md-3 col-auto">
            <div className="flatpickr-input-container ">
              <input
                className="form-control ps-6 datetimepicker"
                id="datepicker"
                type="date"
                data-options='{"dateFormat":"M j, Y","disableMobile":true,"defaultDate":"Mar 1, 2022"}'
              />
              <Icon
                className="flatpickr-icon text-body-tertiary mt-1"
                icon={calendarIcon}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3 gy-6">
          <div className="col-12 col-xxl-2">
            <div className="row align-items-center g-3 g-xxl-0 h-100 align-content-between">
              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <Icon
                    className="fs-4 lh-1 text-primary-dark"
                    icon={booksIcon}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">{quizzes.length}</h2>
                      <span className="fs-7 fw-semibold text-body">
                        Quizzes
                      </span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">
                      Awating processing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon className="fs-5 lh-1 text-warning-dark" icon={faUsersCog} />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">{users.length}</h2>
                      <span className="fs-7 fw-semibold text-body">
                        Managers
                      </span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">
                      Managing departments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <Icon
                    className="fs-4 lh-1 text-success-dark"
                    icon={usersAltIcon}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">{employees.length}</h2>
                      <span className="fs-7 fw-semibold text-body">Employees</span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">
                      Working hard
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
                <div className="d-flex align-items-center">
                  <Icon
                    className="fs-4 lh-1 text-danger-dark"
                    icon={clipboardAltIcon}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 me-2">3</h2>
                      <span className="fs-7 fw-semibold text-body">
                        Reports
                      </span>
                    </div>
                    <p className="text-body-secondary fs-9 mb-0">Are ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n8 px-lg-6 bg-body-emphasis pt-7 pb-3 border-y">
          <div className="row">
            <div className="col-12 col-xl-7 col-xxl-6">
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-7" style={{ marginLeft: "13%"}}>
                  <h3 className="text-body-emphasis text-nowrap">
                    Statistics
                  </h3>
                  <p className="text-body-tertiary mb-md-7">
                    How many fruits are on tree
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-bold">Scores intervals </p>
                    <p className="mb-0 fs-9">
                      Total count <span className="fw-bold">257</span>
                    </p>
                  </div>
                  <hr className="bg-body-secondary mb-2 mt-2" />
                  <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-info-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                     Between 50-75
                    </p>
                    <h5 className="mb-0 text-body">78</h5>
                  </div>
                  {/* <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-warning-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Development
                    </p>
                    <h5 className="mb-0 text-body">63</h5>
                  </div> */}
                  <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-danger-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Between 75-100
                    </p>
                    <h5 className="mb-0 text-body">56</h5>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="d-inline-block bg-success-light bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Between 0-25
                    </p>
                    <h5 className="mb-0 text-body">36</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-block bg-primary bullet-item me-2" />
                    <p className="mb-0 fw-semibold text-body lh-sm flex-1">
                      Between 25-50
                    </p>
                    <h5 className="mb-0 text-body">24</h5>
                  </div>
                  <button className="btn btn-outline-primary mt-5">
                    See Details
                    <span className="fas fa-angle-right ms-2 fs-10 text-center" />
                  </button>
                </div>
                
                
              </div>
            </div>
            
            <div className="col-xl-5 col-xxl-6" style={{marginBottom:"3%", marginLeft:"-1%"}}>
                <DonutChart
                  className = {
                    "donut-chart-container "
                  }
                  innerRadius={0.5}
                  height={320}
                  width={500}
                  data={[
                    {
                      label: "Between 0-25",
                      value: 10,
                    },
                    {
                      label: "Between 75-100",
                      value: 20,
                    },
                    {
                      label: "Between 25-50",
                      value: 30,
                    },
                    {
                      label: "Between 50-75",
                      value: 40,
                    },
                    
                  ]}
                  strokeColor="#141824"
                  emptyColor={"#ffffff"}
                  outerRadius={0.9}
                  colors={[
                    "#90d67e",
                    "#f38270",
                    "#85a9ff",
                    "#5fc6ff",
                    "#fecc85",
                  ]}
                />
              
            </div>
          </div>
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

export default Home;

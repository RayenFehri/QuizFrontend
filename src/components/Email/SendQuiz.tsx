import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { quiz } from '../../Types/Quiz.type';
import { User } from '../../Types/User.type';
import { getCurrentUser, getCurrentUserGroup } from '../../Services/Auth/auth.service';

const SendQuizComponent: React.FC = () => {
    const [toName, setToName] = useState('');
    const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
    const [selectedQuizId, setSelectedQuizId] = useState('');
    const [quizzes, setQuizzes] = useState<quiz[]>([]);
    const [filteredQuizzes, setFilteredQuizzes] = useState<quiz[]>([]);
    const [magicLink, setMagicLink] = useState<string>('');
    const [isLinkSent, setIsLinkSent] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const userGroup = getCurrentUserGroup();
    const currentUser = getCurrentUser();
    useEffect(() => {
        fetchQuizzes();
        fetchUserEmails();
    }, []);

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
            console.error('Error fetching quizzes:', error);
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
            } else if (currentUser.authenticationData.user.user_metadata.role === 1) {
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
        <div className="content pt-0" style={{ width: "80%" }}>
            <div className="email-container">
                <div className="row gx-lg-6 gx-3 py-4 z-2 position-sticky bg-body email-header">
                    <div className="col-auto flex-1">
                        <div className="search-box w-100"></div>
                    </div>
                </div>
                <div className="row g-lg-6 mb-8">
                    <div className="col">
                        <div className="card email-content">
                            <div className="card-body">
                                <form className="d-flex flex-column h-100" onSubmit={handleSubmit}>
                                    <div className="row g-3 mb-2">
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="To Name"
                                                value={toName}
                                                onChange={(e) => setToName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <div className="col-4">
                                                <div className="col-4">
                                                <div className={`dropdown ${isSelectOpen ? 'show' : ''}`}>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          onClick={handleSelectOpen}
                        >
                          To Emails
                        </button>
                        <ul className={`dropdown-menu ${isSelectOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                          <li>
                            <label className="dropdown-item">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={selectedEmails.length === users.length}
                                onChange={handleSelectToggle}
                              />
                              Sélectionner tout
                            </label>
                          </li>
                          {users.map((user) => (
                            <li key={user.id}>
                              <label className="dropdown-item">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  value={user.email}
                                  checked={user.email ? selectedEmails.includes(user.email) : false}
                                  onChange={() => user.email && handleEmailCheckboxChange(user.email)}
                                />
                                {user.email}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="mb-3 flex-1">
                                        <select
                                            className="form-select"
                                            value={selectedQuizId}
                                            onChange={handleQuizChange}
                                        >
                                            <option className="d-none" value="">
                                                Select Quiz
                                            </option>
                                            {filteredQuizzes.map((quiz) => (
                                                <option key={quiz.idquiz} value={quiz.idquiz}>
                                                    {quiz.quiztitle}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <button className="btn btn-primary fs-10" type="submit">
                                                Send Magic Link
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendQuizComponent;

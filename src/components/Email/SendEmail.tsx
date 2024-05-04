import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { quiz } from '../../Types/Quiz.type';

const SendEmailComponent = () => {
  const [toName, setToName] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [toEmails, setToEmails] = useState('');
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [quizzes, setQuizzes] = useState<quiz[]>([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<quiz[]>([]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId="service_njomx6f";
    const templateId="template_wkqq9sg";
    const publicKey="RK1JxrTvnFhH0MZJY";


 // Create a new object that contains dynamic template params
 const templateParams = {
  to_name: toName,
  to_email:toEmail , // Convertir le tableau en chaîne avec des virgules
  from_name: "Société",
  from_email: "rayenfehri12@gmail.com",
  message: message,
  subject: subject,
  quiz_id: selectedQuizId, // Ajoutez l'ID du quiz sélectionné dans les paramètres du modèle
};

// Envoyez l'e-mail en utilisant EmailJS
emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    console.log('Email sent successfully!', response);
    setToName('');
    setToEmail('');
    setFromName('');
    setFromEmail('');
    setMessage('');
    setSubject('');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
};

useEffect(() => {
fetchQuiz();
}, []);

const fetchQuiz = async () => {
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

const handleQuizChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setSelectedQuizId(event.target.value);
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
                    type="email"
                    placeholder="To Email"
                    value={toEmail}
                    onChange={(e) => setToEmail(e.target.value)}
                  />
                </div>
                <div className="col-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="to name"
                    value={toName}
                    onChange={(e) => setToName(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 flex-1">
                <textarea
                  className="form-control"
                  cols={30}
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  defaultValue={""}
                />
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectTask"
                    value={selectedQuizId}
                    onChange={handleQuizChange}
                  >
                    <option className="d-none" value="">
                      Select Quizes
                    </option>
                    {filteredQuizzes.map((quiz) => (
                      <option key={quiz.idquiz} value={quiz.idquiz}>
                        {quiz.quiztitle}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelectTask">Select Quiz</label>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <label
                    className="btn btn-link py-0 px-2 text-body fs-9"
                    htmlFor="emailAttachment"
                  >
                    {" "}
                    <span className="fa-solid fa-paperclip" />
                  </label>
                  <input className="d-none" id="emailAttachment" type="file" />
                  <label
                    className="btn btn-link py-0 px-2 text-body fs-9"
                    htmlFor="emailPhotos"
                  >
                    <span className="fa-solid fa-image" />
                  </label>
                  <input
                    className="d-none"
                    id="emailPhotos"
                    type="file"
                    accept="image/*"
                  />
                </div>
                <div className="d-flex">
                  <button className="btn btn-link text-body fs-10 text-decoration-none">
                    Discard
                  </button>
                  <button className="btn btn-primary fs-10" type="submit">
                    Send
                    <span className="fa-solid fa-paper-plane ms-1" />
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

export default SendEmailComponent;
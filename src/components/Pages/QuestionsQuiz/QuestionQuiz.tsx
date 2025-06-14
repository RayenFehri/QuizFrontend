import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import CustomPagination from "../../Pagination/CustomPagination";
import { Form } from "react-bootstrap";
import axios from "axios";
import { quiz } from "../../../Types/Quiz.type";
import { useParams } from "react-router-dom";

const QuestionQuiz = () => {

  // Chat
  const [formDataChat, setFormDataChat] = useState({
    file: null as File | null,
    message: "",
    questionType: "",
  });
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [aiMessages, setAiMessages] = useState<string[]>([]);

  const handleChangeChat = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const inputElement = e.target as HTMLInputElement;
      const file = inputElement.files && inputElement.files[0];
      if (file) {
        setFormDataChat({ ...formDataChat, [name]: file });
      }
    } else {
      setFormDataChat({ ...formDataChat, [name]: value });
    }
  };

  const handleSubmitChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("message", formDataChat.message);
      formDataToSend.append("questionType", formDataChat.questionType);
      if (formDataChat.file) {
        formDataToSend.append("file", formDataChat.file);
      }

      const response = await axios.post("http://localhost:3000/ai", formDataToSend);
      console.log(response.data);
      setChatMessages([...chatMessages, formDataChat.message]);
      setFormDataChat({ ...formDataChat, message: "" });
      setPlaceholder('Type your message...');
      setAiMessages([...aiMessages, response.data.aiResponse.aiMessage]);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [placeholder, setPlaceholder] = useState('Type your message...');

  const handleMessageInput = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newMessage = e.currentTarget.innerText.trim();
    setFormDataChat({ ...formDataChat, message: newMessage });
    if (!newMessage) {
      setPlaceholder('Type your message...');
    } else {
      setPlaceholder('');
    }
  };

  const handleFocus = () => {
    if (placeholder === 'Type your message...') {
      setPlaceholder('');
    }
  };

  const handleBlur = () => {
    if (!formDataChat.message.trim()) {
      setPlaceholder('Type your message...');
    }
  };
  //end chat





  const [formData, setFormData] = useState({
    id_quiz: '',
    question_content: '',
    explantation: '',
    questiontype: '',
    answers: [{ content: '', iscorrect: false }],
  });
  const { idquiz } = useParams<{ idquiz: string }>();
  useEffect(() => {
    // Fetch quiz data based on id_quiz when component mounts
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/quiz/findoneQuiz/${idquiz}`); // Adjust the API endpoint according to your backend route
        const quizData = response.data;
        // Update formData state with quizData
        setFormData({
          ...formData,
          id_quiz: quizData.idquiz,
          // Update other properties accordingly
        });
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchQuizData();
  }, [idquiz]);
  const [quiz, setQuiz] = useState<quiz[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = (index: number, iscorrect: boolean) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: prevFormData.answers.map((answer, i) =>
        i === index ? { ...answer, iscorrect } : answer
      ),
    }));
  };

  const handleAnswerChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: prevFormData.answers.map((answer, i) =>
        i === index ? { ...answer, content: value } : answer
      ),
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/question/createQuestion",
        {
          id_quiz: idquiz,
          question_content: formData.question_content,
          explantation: formData.explantation,
          questiontype: formData.questiontype,
          answers: formData.answers.map((answer) => ({
            content: answer.content,
            iscorrect: answer.iscorrect,
          })),
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [options, setOptions] = useState([{ content: "", iscorrect: false }]);

  //   const addOption = () => {
  //     setOptions([...options, { content: "", iscorrect: false }]);
  //   };

  const removeOption = (indexToRemove: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: prevFormData.answers.filter((_, index) => index !== indexToRemove)
    }));
    setOptions((prevOptions) => prevOptions.filter((_, index) => index !== indexToRemove));
  };


  const addOption = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      answers: [
        ...prevFormData.answers,
        { content: "", iscorrect: false } // Ensure to use isCorrect instead of iscorrect
      ]
    }));
    setOptions([...options, { content: "", iscorrect: false }]);
  };

  const [questions, setQuestions] = useState([
    { title: "", options: ["Option 1", "Option 2"] },
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 1;

  const addQuestion = () => {
    const newQuestion = resetNewQuestion();
    const newQuestions = [...questions, newQuestion];
    setQuestions(newQuestions);
    setCurrentPage(newQuestions.length - 1);
  };


  const resetNewQuestion = () => {
    return {
      title: "",
      options: Array.from(
        { length: options.length },
        (_, index) => `Option ${index + 1}`
      ),
    };
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(0, currentPage - 1));
  };

  const nextPage = () => {
    setCurrentPage((currentPage) =>
      Math.min(questions.length / questionsPerPage - 1, currentPage + 1)
    );
  };





  return (
    <div className="content">

  


      <div className="col-auto" >
        <div className="d-flex flex-wrap gap-2">

          {/*------------------------------------Chat---------------------  */}

          <div className="d-flex mt-0" style={{ marginRight: '25%' }}>
           


            <div className="modal fade" id="sendChatModal" tabIndex={-1}>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border border-translucent">
                  

                  <div className="chat d-flex phoenix-offcanvas-container pt-1 mt-n1 mb-50 ">
                    <div className="chat-content tab-content flex-1">
                      <div
                        className="tab-pane h-100 fade active show"
                        id="tab-thread-1"
                        role="tabpanel"
                        aria-labelledby="tab-thread-1"
                      >
                        <div className="card flex-1 h-100 phoenix-offcanvas-container">
                          <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                                data-phoenix-toggle="offcanvas"
                                data-phoenix-target="#chat-sidebar"
                              >
                                <span className="fa-solid fa-chevron-left" />
                              </button>
                              <div className="d-flex flex-column flex-md-row align-items-md-center">
                              <img
                  className="rounded-circle"
                  src="../assets/img/ai-avatar.png"
                  alt=""
                  style={{ width: '40px', height: '40px' }} // Ajustez la taille de l'image selon vos besoins
                />
                                <button
                                  className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                                  data-phoenix-toggle="offcanvas"
                                  data-phoenix-target="#thread-details-0"
                                >
                                  <span className="line-clamp-1">Quizo Bot</span>
                                </button>
                                <p className="fs-9 mb-0 me-2">
                                  {" "}
                                  <span className="fa-solid fa-circle text-success fs-11 me-2" />
                                  Active now
                                </p>
                              </div>
                              
                            </div>
                            <button
                      className="btn p-1 text-danger"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span className="fas fa-times fs-9"> </span>
                    </button>
                          </div>

                          <div className="card-body p-3 p-sm-4 scrollbar">
                            {chatMessages.map((message, index) => (
                              <React.Fragment key={index}>
                                {/* User message */}
                                <div className="d-flex chat-message">
                                  <div className="d-flex mb-2 justify-content-end flex-1">
                                    <div className="w-100 w-xxl-75">
                                      <div className="d-flex flex-end-center hover-actions-trigger">
                                        <div className="chat-message-content me-2">
                                          <div className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white" data-bs-theme="light">
                                            <p className="mb-0">{message}</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-end">
                                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">{new Date().toLocaleString()}</p>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* AI response */}
                                {aiMessages[index] && (
                                  <div className="d-flex chat-message" >
                                    <div className="d-flex mb-2 flex-1">
                                      <div className="w-100 w-xxl-75">
                                        <div className="d-flex hover-actions-trigger">
                                          <div className="avatar avatar-m me-3 flex-shrink-0">
                                            <img className="rounded-circle" src="../assets/img/ai-avatar.png" alt="" />
                                          </div>
                                          <div className="chat-message-content received me-2">
                                            <div className="mb-1 received-message-content border rounded-2 p-3">
                                              <p className="mb-0">{aiMessages[index]}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-10">{new Date().toLocaleString()}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="card-footer">
                            <form onSubmit={handleSubmitChat}>

                              <div

                                className="chat-textarea outline-none scrollbar mb-1"
                                contentEditable={true}
                                onInput={handleMessageInput}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                style={{ opacity: placeholder ? 0.7 : 1 }}
                              >
                                {placeholder}
                              </div>


                              <div className="col-sm-6 col-md-2">
                                <div className="form-floating">
                                  <select className="form-select" id="floatingSelectAssignees"
                                    name='questionType'
                                    value={formDataChat.questionType}
                                    onChange={handleChangeChat}>
                                    <option  value="pdf">pdf</option>
                                    <option selected value="general">general</option>
                                  </select>
                                  <label htmlFor="floatingSelectAssignees">Select Question Type</label>
                                </div>
                              </div>

                              <div className="d-flex justify-content-between align-items-end">
                                <input className="d-none" type="file" accept="file/*" id="chatAttachment-0" name='file' onChange={handleChangeChat} />
                                <label className="btn btn-link py-0 px-2 text-body fs-9" htmlFor="chatAttachment-0" > {" "}
                                  <span className="fa-solid fa-paperclip" />
                                </label>
                                <div>
                                  <button className="btn btn-primary fs-10" type="submit">
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
              </div>
            </div>
          </div>
          {/* ----------------------------------End Chat---------------------- */}
          {/* <br />
          <div className="col-auto ">
                    <input className="d-flex mb-3" type="file" />
                    
                    
        </div> */}



        </div>
      </div>
      <form className="mb-9" onSubmit={handleSubmit}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            
            <h2 className="mb-5">Create Questions</h2>
         
          </div>
          
          <div className="col-auto">
              <button
                className="btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#sendChatModal"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-reference="parent"
              >
                <img
                  className="rounded-circle"
                  src="../assets/img/ai-avatar.png"
                  alt=""
                  style={{ width: '50px', height: '50px' }} // Ajustez la taille de l'image selon vos besoins
                />
              </button>
            <button
              className="btn btn-primary mb-2 mb-sm-0"
              type="button"
              onClick={addQuestion}
            >
              Add Question
            </button>
            
          </div>
        </div>
        <div className="row g-5">
          <div className="row g-2">
            <div className="col-12 col-xl-12">
              <div className="card">
                {questions
                  .slice(
                    currentPage * questionsPerPage,
                    (currentPage + 1) * questionsPerPage
                  )
                  .map((question, index) => (
                    <div key={index} className="card-body">
                      <h4 className="card-title mb-4">{`Question ${index + currentPage * questionsPerPage + 1
                        }`}</h4>
                      <h4 className="mb-3">Question Title</h4>
                      <input
                        className="form-control mb-5"
                        type="text"
                        placeholder="Write content here..."
                        name="question_content"
                        value={formData.question_content}
                        onChange={handleChange}
                      />
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                          <div className="d-flex flex-wrap mb-2">
                            <h5 className="mb-0 text-body-highlight me-2">
                              Question type
                            </h5>
                          </div>
                          <select
                            className="form-select mb-3"
                            aria-label="category"
                            value={formData.questiontype}
                            onChange={handleChange}
                            name="questiontype"
                          >
                            <option className="d-none" value="">
                              Choisir un type...
                            </option>
                            <option value="T/F">True/False</option>
                            <option value="Multiple choice">Multiple</option>
                          </select>
                        </div>
                      </div>
                      {options.map((option, optionIndex) => (
                        <div key={optionIndex} className="col-12 col-sm-6 col-xl-12">
                          <div className="d-flex flex-wrap mb-2">
                            <h5 className="text-body-highlight me-2">
                              Option {optionIndex + 1}
                            </h5>
                            <button
                              className="btn btn-link fw-bold fs-9"
                              onClick={() => removeOption(optionIndex)}
                            >
                              Remove
                            </button>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              inline
                              label="Correct"
                              name={`group${optionIndex}`}
                              type="radio"
                              id={`inline-radio-1-${optionIndex}`}
                              checked={formData.answers[optionIndex].iscorrect === true}
                              value="true"
                              onChange={(e) => handleOptionChange(optionIndex, true)}
                            />
                            <Form.Check
                              inline
                              label="Incorrect"
                              name={`group${optionIndex}`}
                              type="radio"
                              id={`inline-radio-2-${optionIndex}`}
                              checked={formData.answers[optionIndex].iscorrect === false}
                              value="false"
                              onChange={(e) => handleOptionChange(optionIndex, false)}
                            />
                          </div>
                          <div className="product-variant-select-menu mb-3">
                            <input
                              type="text"
                              className="form-control mb-3"
                              data-choices="data-choices"
                              data-options='{"removeItemButton":true,"placeholder":true}'
                              name="content"
                              value={formData.answers[optionIndex].content}
                              onChange={(e) => handleAnswerChange(optionIndex, e)} />
                          </div>
                        </div>
                      ))}

                      <button
                        className="btn btn-phoenix-primary w-100"
                        type="button"
                        onClick={addOption}
                      >
                        Add another option
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <button
            className="btn btn-secondary me-2"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <CustomPagination
            currentPage={currentPage + 1}
            totalPages={Math.ceil(questions.length / questionsPerPage)}
            onPageChange={setCurrentPage}
          />
  <button
    className="btn btn-secondary"
    onClick={nextPage}
    disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}
  >
            Next
          </button>
        </div>
   
        <div className="d-flex justify-content-between">

  <button className="btn btn-primary" type="submit">
    Save
  </button>
  <div className="space"></div> {/* Classe personnalisée pour l'espace */}
  <button className="btn btn-secondary me-2" type="button">
    <a href="/listquiz" className="text-decoration-none text-white">Finish</a>
  </button>
</div>

      </form>
    </div>
  );
};

export default QuestionQuiz;
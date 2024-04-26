import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import CustomPagination from "../../Pagination/CustomPagination";
import { Form } from "react-bootstrap";
import axios from "axios";
import { quiz } from "../../Types/quiz.type";
import { useParams } from "react-router-dom";

const QuestionQuiz = () => {
  const [formData, setFormData] = useState({
    id_quiz:'',
    question_content: '',
    explantation: '',
    questiontype: '',
    answers: [{content:'',iscorrect:false}],
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
              id_quiz: formData.id_quiz,
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
      <nav className="mb-2" aria-label="breadcrumb">
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
      <form className="mb-9" onSubmit={handleSubmit}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Create Questions</h2>
            <h5 className="text-body-tertiary fw-semibold">
              Orders placed across your store
            </h5>
          </div>
          <div className="col-auto">
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
                      <h4 className="card-title mb-4">{`Question ${
                        index + currentPage * questionsPerPage + 1
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
                        <div
                          key={optionIndex}
                          className="col-12 col-sm-6 col-xl-12"
                        >
                          <div className="d-flex flex-wrap mb-2">
                            <h5 className="text-body-highlight me-2">
                              Option {optionIndex + 1}
                            </h5>
                            <a className="fw-bold fs-9" href="#!">
                              Remove
                            </a>
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
                              onChange={(e) => handleAnswerChange(optionIndex, e)}                            />
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
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
  

export default QuestionQuiz;

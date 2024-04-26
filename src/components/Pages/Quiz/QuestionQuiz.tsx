import React, { useState, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

interface Option {
  content: string;
  iscorrect: boolean;
}

interface Question {
  question_content: string;
  explantation: string;
  questiontype: string;
  options: Option[];
}

const QuestionQuiz: React.FC = () => {
  const [formData, setFormData] = useState({
    id_quiz: 'e5dac282-bafa-4eb5-80e3-0a18292eae7a',
    explantation:"tttttttt", 
    questions: [] as Question[],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const [questionIndex, fieldName] = name.split('-');
    setFormData((prevState) => ({
      ...prevState,
      questions: prevState.questions.map((question, index) => {
        if (index === Number(questionIndex)) {
          return {
            ...question,
            [fieldName]: value,
          };
        }
        return question;
      }),
    }));
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    checked: boolean
  ) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options[optionIndex].iscorrect = checked;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const addOption = (questionIndex: number) => {
    const newOptions = [
      ...formData.questions[questionIndex].options,
      {
        content: `Option ${formData.questions[questionIndex].options.length + 1}`,
        iscorrect: false,
      },
    ];
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options = newOptions;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setFormData((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        {
          question_content: '',
          explantation: '',
          questiontype: '',
          options: [
            { content: 'Option 1', iscorrect: false },
            { content: 'Option 2', iscorrect: false },
          ],
        },
      ],
    }));
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    questionIndex: number
  ) => {
    e.preventDefault();
    try {
      const { question_content, explantation, questiontype, options } = formData.questions[questionIndex];
      const answers = options.map(option => ({ content: option.content, iscorrect: option.iscorrect }));
      const dataToSend = {
        id_quiz: formData.id_quiz,
        question_content,
        explantation: formData.explantation,
        questiontype,
        answers
      };

      const response = await axios.post(
        'http://localhost:3000/question/createQuestion',
        dataToSend
      );
      console.log(
        'Question and Answers created successfully!',
        response.data
      );
      // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après la création réussie
    } catch (error) {
      console.error('Error creating Question and Answers:', error);
      // Afficher un message d'erreur à l'utilisateur ou effectuer d'autres actions nécessaires en cas d'erreur
    }
  };

  const prevPage = () => {
    // Implémenter la logique de la page précédente
  };

  const nextPage = () => {
    // Implémenter la logique de la page suivante
  };

  return (
    <div className="content">
      <nav className="mb-2" aria-label="breadcrumb">
        {/* Intégrer la navigation */}
      </nav>
      <form className="mb-9">
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
                {formData.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="card-body">
                    <h4 className="card-title mb-4">{`Question ${
                      questionIndex + 1
                    }`}</h4>
                    <div className="row g-3">
                      <h4 className="mb-3">Question Title</h4>
                      <input
                        className="form-control mb-5"
                        type="text"
                        name={`${questionIndex}-question_content`}
                        placeholder="Write title of the question here"
                        value={question.question_content}
                        onChange={handleChange}
                      />

                      <h4 className="mb-3">Question Explanation</h4>
                      <input
                        className="form-control mb-5"
                        type="text"
                        name={`${questionIndex}-explantation`}
                        placeholder="Write explanation of the question here"
                        value={question.explantation}
                        onChange={handleChange}
                      />

                      <h4 className="mb-3">Question Type</h4>
                      <select
                        className="form-select mb-5"
                        name={`${questionIndex}-questiontype`}
                        value={question.questiontype}
                        onChange={handleChange}
                      >
                        <option value="">Select question type</option>
                        <option value="multiple_choice">Multiple Choice</option>
                        <option value="T/F">T/F</option>
                      </select>

                      <h4 className="mb-3">Options</h4>
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="row g-2 align-items-center">
                          <div className="col-auto">
                            <Form.Check
                              type="radio"
                              id={`inline-radio-${optionIndex}-${questionIndex}`}
                              label={`Option ${optionIndex + 1}`}
                              checked={option.iscorrect}
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleOptionChange(questionIndex, optionIndex, e.target.checked)
                              }
                            />
                          </div>
                          <div className="col">
                            <input
                              className="form-control"
                              type="text"
                              name={`${questionIndex}-option-${optionIndex}-content`}
                              placeholder={`Write option ${optionIndex + 1} here`}
                              value={option.content}
                              onChange={(e) =>
                                handleChange(e as ChangeEvent<HTMLInputElement | HTMLSelectElement>)
                              }
                            />
                          </div>
                        </div>
                      ))}
                      <button
                        className="btn btn-primary mt-4"
                        type="button"
                        onClick={() => addOption(questionIndex)}
                      >
                        Add Option
                      </button>
                    </div>

                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-primary me-2"
                          type="button"
                          onClick={(e) => handleSubmit(e, questionIndex)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          onClick={prevPage}
                        >
                          Prev
                        </button>
                        <button
                          className="btn btn-primary ms-2"
                          type="button"
                          onClick={nextPage}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionQuiz;

// import React, { useState } from 'react';
// import CustomPagination from '../../Pagination/CustomPagination';
// import { Form } from 'react-bootstrap';

// // Interface pour définir la structure d'une question
// interface Question {
//   title: string;
//   options: string[];
// }

// const QuestionQuiz = () => {
//   // État pour stocker les options
//   const [options, setOptions] = useState(['Option 1', 'Option 2']);

//   // Fonction pour ajouter une nouvelle option
//   const addOption = () => {
//     const newOptions = [...options, `Option ${options.length + 1}`];
//     setOptions(newOptions);
//   };

//   // État pour stocker les questions
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const questionsPerPage = 1; // Nombre de questions par page

//   // Fonction pour ajouter une nouvelle question avec un état initial vide
//   const addQuestion = () => {
//     // Créer une nouvelle question avec des options vides
//     const newQuestion: Question = {
//       title: '',
//       options: ['Option 1', 'Option 2'] // Nombre fixe d'options pour chaque nouvelle question
//     };
//     setQuestions([...questions, newQuestion]);
//   };

//   // Fonction pour afficher la page précédente
//   const prevPage = () => {
//     setCurrentPage(currentPage => Math.max(0, currentPage - 1));
//   };

//   // Fonction pour afficher la page suivante
//   const nextPage = () => {
//     setCurrentPage(currentPage => Math.min(questions.length / questionsPerPage - 1, currentPage + 1));
//   };

//   // JSX pour afficher le formulaire de quiz et la gestion des options
//   return (
//     <div className="content">
//       <nav className="mb-2" aria-label="breadcrumb">
//         <ol className="breadcrumb mb-0">
//           <li className="breadcrumb-item">
//             <a href="#!">Page 1</a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#!">Page 2</a>
//           </li>
//           <li className="breadcrumb-item active">Default</li>
//         </ol>
//       </nav>
//       <form className="mb-9">
//         <div className="row g-3 flex-between-end mb-5">
//           <div className="col-auto">
//             <h2 className="mb-2">Create Questions</h2>
//             <h5 className="text-body-tertiary fw-semibold">
//               Orders placed across your store
//             </h5>
//           </div>
//           <div className="col-auto">
//             <button className="btn btn-primary mb-2 mb-sm-0" type="button" onClick={addQuestion}>
//               Add Question
//             </button>
//           </div>
//         </div>

//         <div className="row g-5">
//           <div className="row g-2">
//             <div className="col-12 col-xl-12">
//               <div className="card">
//                 {questions.map((question, index) => (
//                   <div key={index} className="card-body">
//                     <h4 className="card-title mb-4">{`Question ${index + 1}`}</h4>
//                     <div className="row g-3">
//                       <h4 className="mb-3">Question Title</h4>
//                       <input
//                         className="form-control mb-5"
//                         type="text"
//                         placeholder="Write title here..."
//                       />
//                       <div className="col-12 col-sm-6 col-xl-12">
//                         <div className="mb-4">
//                           <div className="d-flex flex-wrap mb-2">
//                             <h5 className="mb-0 text-body-highlight me-2">
//                               Question type
//                             </h5>
//                           </div>
//                           <select
//                             className="form-select mb-3"
//                             aria-label="category"
//                           >
//                             <option value="men-cloth" selected>Choisir un type...</option>
//                             <option value="men-cloth">True/False</option>
//                             <option value="women-cloth">Multiple</option>
//                             <option value="kid-cloth">Seul response</option>
//                           </select>
//                         </div>
//                       </div>
//                       {question.options.map((option, optionIndex) => (
//                         <div key={optionIndex} className="col-12 col-sm-6 col-xl-12">
//                           <div className="d-flex flex-wrap mb-2">
//                             <h5 className="text-body-highlight me-2">Option {optionIndex + 1}</h5>
//                             {/* Lien pour supprimer l'option si nécessaire */}
//                             <a className="fw-bold fs-9" href="#!">
//                               Remove
//                             </a>
//                           </div>
//                           <div className="mb-3">
//                             <Form.Check
//                               inline
//                               label="Correct"
//                               name={`group${optionIndex}`}
//                               type='radio'
//                               id={`inline-radio-1-${optionIndex}`}
//                             />
//                             <Form.Check
//                               inline
//                               label="Incorrect"
//                               name={`group${optionIndex}`}
//                               type='radio'
//                               id={`inline-radio-2-${optionIndex}`}
//                             />
//                           </div>
//                           <div className="product-variant-select-menu mb-3">
//                             <textarea
//                               className="form-control mb-3"
//                               data-choices="data-choices"
//                               data-options='{"removeItemButton":true,"placeholder":true}'
//                             />
//                           </div>
//                         </div>
//                       ))}
//                       <button className="btn btn-phoenix-primary w-100" type="button" onClick={addOption}>
//                         Add another option
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-3 d-flex justify-content-center">
//           <button className="btn btn-secondary me-2" onClick={prevPage} disabled={currentPage === 0}>
//             Prev
//           </button>
//           <CustomPagination
//             currentPage={currentPage}
//             totalPages={Math.ceil(questions.length / questionsPerPage)}
//             onPageChange={setCurrentPage}
//           />
//           <button className="btn btn-secondary" onClick={nextPage} disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}>
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default QuestionQuiz;


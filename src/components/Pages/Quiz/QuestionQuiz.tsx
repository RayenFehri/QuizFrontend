import React, { useState } from 'react';
import CustomPagination from '../../Pagination/CustomPagination';
import { Form } from 'react-bootstrap';

const QuestionQuiz = () => {
  // État pour stocker les options
  const [options, setOptions] = useState(['Option 1', 'Option 2']);

  // Fonction pour ajouter une nouvelle option
  const addOption = () => {
    const newOptions = [...options, `Option ${options.length + 1}`];
    setOptions(newOptions);
  };


  // État pour stocker les questions
  const [questions, setQuestions] = useState([{ title: '', options: ['Option 1', 'Option 2'] }]);
  // État pour suivre la page actuelle
  const [currentPage, setCurrentPage] = useState(0);
  // Nombre de questions par page
  const questionsPerPage = 1;

  // Fonction pour ajouter une nouvelle question
  const addQuestion = () => {
    // Créer une nouvelle question avec des options vides
    const newQuestion = resetNewQuestion();
    // Ajouter la nouvelle question à la liste des questions
    const newQuestions = [...questions, newQuestion];
    // Mettre à jour l'état des questions
    setQuestions(newQuestions);
    // Définir la page actuelle sur la dernière page (la nouvelle question)
    setCurrentPage(newQuestions.length - 1);
  };

  // Fonction pour réinitialiser les champs de la nouvelle question
  const resetNewQuestion = () => {
    return { title: '', options: Array.from({ length: options.length }, (_, index) => `Option ${index + 1}`) };
  };

  // Fonction pour afficher la page précédente
  const prevPage = () => {
    setCurrentPage(currentPage => Math.max(0, currentPage - 1));
  };

  // Fonction pour afficher la page suivante
  const nextPage = () => {
    setCurrentPage(currentPage => Math.min(questions.length / questionsPerPage - 1, currentPage + 1));
  };

  // Générer une liste des numéros de question
  const questionNumbers = [];
  for (let i = 0; i < questions.length; i++) {
    questionNumbers.push(i + 1);
  }

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
      <form className="mb-9">
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Create Questions</h2>
            <h5 className="text-body-tertiary fw-semibold">
              Orders placed across your store
            </h5>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-2 mb-sm-0" type="button" onClick={addQuestion}>
              Add Question
            </button>
          </div>
        </div>

        <div className="row g-5">
          <div className="row g-2">
            <div className="col-12 col-xl-12">
              <div className="card">
                {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question, index) => (
                  <div key={index} className="card-body">
                    <h4 className="card-title mb-4">{`Question ${index + currentPage * questionsPerPage + 1}`}</h4>
                    <div className="row g-3">
                      <h4 className="mb-3">Question Title</h4>
                      <input
                        className="form-control mb-5"
                        type="text"
                        placeholder="Write title here..."
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
                          >
                            <option value="men-cloth" selected>Choisir un type...</option>
                            <option value="men-cloth">True/False</option>
                            <option value="women-cloth">Multiple</option>
                            <option value="kid-cloth">Seul response</option>
                          </select>
                        </div>
                      </div>
                      {options.map((option, optionIndex) => (
                        <div key={optionIndex} className="col-12 col-sm-6 col-xl-12">
                          <div className="d-flex flex-wrap mb-2">
                            <h5 className="text-body-highlight me-2">Option {optionIndex + 1}</h5>
                            {/* Lien pour supprimer l'option si nécessaire */}
                            <a className="fw-bold fs-9" href="#!">
                              Remove
                            </a>
                          </div>

                          <div className="mb-3">
                            <Form.Check
                              inline
                              label="Correct"
                              name={`group${optionIndex}`}
                              type='radio'
                              id={`inline-radio-1-${optionIndex}`}
                            />
                            <Form.Check
                              inline
                              label="Incorrect"
                              name={`group${optionIndex}`}
                              type='radio'
                              id={`inline-radio-2-${optionIndex}`}
                            />
                         
                          </div>



                          <div className="product-variant-select-menu mb-3">
                            <textarea
                              className="form-control mb-3"
                              data-choices="data-choices"
                              data-options='{"removeItemButton":true,"placeholder":true}'
                            />
                          </div>
                        </div>
                      ))}
                      <button className="btn btn-phoenix-primary w-100" type="button" onClick={addOption}>
                        Add another option
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <button className="btn btn-secondary me-2" onClick={prevPage} disabled={currentPage === 0}>
            Prev
          </button>
          <CustomPagination
            currentPage={currentPage} // Ajoutez 1 à currentPage car la pagination commence à 1
            totalPages={Math.ceil(questions.length / questionsPerPage)} // Calculez le nombre total de pages
            onPageChange={setCurrentPage} // Définissez la fonction de changement de page
          />
          <button className="btn btn-secondary" onClick={nextPage} disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuestionQuiz;

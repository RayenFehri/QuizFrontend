import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'

// Calendar.js
import React, { useEffect, useRef, useState } from 'react';
import { Calendar as FullCalendar } from 'fullcalendar'; // Importez le composant Calendar de fullcalendar
import flatpickr from 'flatpickr';
import { faCalendar, faClosedCaptioning, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from 'tooltip.js'; // Importez Tooltip pour la personnalisation des événements
const App = () => {

    const [selectedDate, setSelectedDate] = useState<string>(''); // État pour stocker la date sélectionnée


      




    const calendarRef = useRef<HTMLDivElement>(null); // Assurez-vous de spécifier le type de la référence

    useEffect(() => {
        const calendarEl = calendarRef.current;
        if (calendarEl) {
            const calendar = new FullCalendar(calendarEl, {
               
                customButtons: {
                    prev: {
                      text: 'Précédent',
                      click: function() {
                        calendar.prev();
                      }
                    },
                    next: {
                      text: 'Suivant',
                      click: function() {
                        calendar.next();
                      }
                    },
                    today: {
                      text: 'Today',
                      click: function() {
                        calendar.today();
                      }
                    }
                  },
                  headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  },
                eventContent: function(arg) {
                    return {
                        html: `<b>${arg.timeText}</b><br><i>${arg.event.title}</i>`
                    };
                },
                eventDidMount: function(info) {
                    const tooltip = new Tooltip(info.el, {
                        title: info.event.title,
                        placement: 'top',
                        trigger: 'hover',
                        container: 'body'
                    });
                },
                eventClick: function(info) {
                    alert(`Clicked on event with ID ${info.event.id}`);
                },
                dateClick: function(info) {
                    setSelectedDate(info.dateStr); // Mettre à jour l'état avec la date cliquée
                    alert(`Clicked on date ${info.dateStr}`);
                  }
                  
            });
            calendar.render();


            return () => {
                calendar.destroy();
            };
        }
    }, []);

    const startDateRef = useRef<HTMLInputElement>(null); // Référence au champ de date
    const endDateRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const startDateInput = startDateRef.current;
        const endDateInput = endDateRef.current;

        if (startDateInput && endDateInput) {
            flatpickr(startDateInput, {
                enableTime: true,
                dateFormat: 'Y-m-d H:i',
                onChange: function(selectedDates, dateStr) {
                    setSelectedDate(dateStr);
                }
            });

        flatpickr(startDateInput, {
          enableTime: true, // Activez la sélection de l'heure
          dateFormat: 'Y-m-d H:i', // Format de date et d'heure
        });
      }
    }, []);


    const [calendar, setCalendar] = useState<any>(null); // Référence au calendrier

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const title = (event.target as any).elements.title.value;
        const startDate = (event.target as any).elements.startDate.value;
        const endDate = (event.target as any).elements.endDate.value;

        // Créer un objet représentant l'événement
        const eventObject = {
            title: title,
            start: startDate,
            end: endDate
            // Vous pouvez ajouter d'autres propriétés de votre choix ici
        };

        // Ajouter l'événement au calendrier
        if (calendar) {
            calendar.addEvent(eventObject);
        }
    };

   
    
  return (
    <>
  
    <div className="content" style={{marginRight:"1px"}}>
      <div className="row g-0 mb-4 align-items-center">
        <div className="col-5 col-md-6">
          <h4 className="mb-0 text-body-emphasis fw-bold fs-md-6">
            <span className="calendar-day d-block d-md-inline mb-1" />
        
            <span className="calendar-date" />
          </h4>
        </div>
        <div className="col-7 col-md-6 d-flex justify-content-end">
          <button className="btn btn-link text-body px-0 me-2 me-md-4">
            <span className="fa-solid fa-sync fs-10 me-2" />
            <span className="d-none d-md-inline">Sync Now</span>
          </button>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addEventModal"
          >
            {" "}
            <span className="fas fa-plus pe-2 fs-10" />
            Add new task{" "}
          </button>
        </div>
      </div>
  
      <div className="calendar-outline mt-6 mb-9" id="appCalendar" ref={calendarRef}></div>

    </div>
    <div className="modal fade" id="eventDetailsModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border border-translucent" />
      </div>
    </div>
    <div className="modal fade" id="addEventModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content border border-translucent">
          <form id="addEventForm" autoComplete="off" onSubmit={handleSubmit}>
            <div className="modal-header px-card border-0">
              <div className="w-100 d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="mb-0 lh-sm text-body-highlight">Add new</h5>
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        id="inlineRadio1"
                        type="radio"
                        name="calendarTask"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">
                        Event
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      {" "}
                      <input
                        className="form-check-input"
                        id="inlineRadio2"
                        type="radio"
                        name="calendarTask"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        Task
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="btn p-1 fs-10 text-body"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  DISCARD{" "}
                </button>
              </div>
            </div>
            <div className="modal-body p-card py-0">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="eventTitle"
                  type="text"
                  name="title"
                  required
                  placeholder="Event title"
                />
                <label htmlFor="eventTitle">Title</label>
              </div>
              <div className="form-floating mb-5">
                <select className="form-select" id="eventLabel" name="label">
                  <option value="primary" selected>
                    Business
                  </option>
                  <option value="secondary">Personal</option>
                  <option value="success">Meeting</option>
                  <option value="danger">Birthday</option>
                  <option value="info">Report</option>
                  <option value="warinng">Must attend</option>
                </select>
                <label htmlFor="eventLabel">Label</label>
              </div>
              <div className="flatpickr-input-container mb-3">
    <div className="form-floating position-relative">
        <input
            style={{ paddingRight: '2.5rem' }} 
            ref={startDateRef}
            className="form-control datetimepicker"
            id="eventStartDate"
            type="text"
            name="startDate"
            value={selectedDate}
            placeholder="yyyy/mm/dd hh:mm"
            data-options='{"disableMobile":true,"enableTime":"true","dateFormat":"Y-m-d H:i"}'
        />
        <FontAwesomeIcon icon={faCalendar} className="calendar-icon" style={{ position: 'absolute', top: '50%', right: '0.75rem', transform: 'translateY(-50%)' }} />
        <label className="ps-6" htmlFor="eventStartDate">
            Starts at
        </label>
    </div>
</div>

              <div className="flatpickr-input-container mb-3">
                <div className="form-floating">
                  <input
                     style={{ paddingRight: '2.5rem' }} 
                    className="form-control datetimepicker"
                    id="eventEndDate"
                    type="text"
                    name="endDate"
                    placeholder="yyyy/mm/dd hh:mm"
                    data-options='{"disableMobile":true,"enableTime":"true","dateFormat":"Y-m-d H:i"}'
                  />
                <FontAwesomeIcon icon={faCalendar} className="calendar-icon" style={{ position: 'absolute', top: '50%', right: '0.75rem', transform: 'translateY(-50%)' }} />
                  <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
                  <label className="ps-6" htmlFor="eventEndDate">
                    Ends at
                  </label>
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="eventAllDay"
                  name="allDay"
                />
                <label className="form-check-label" htmlFor="eventAllDay">
                  All day event{" "}
                </label>
              </div>
              <div className="form-floating my-5">
                <textarea
                  className="form-control"
                  id="eventDescription"
                  placeholder="Leave a comment here"
                  name="description"
                  style={{ height: 128 }}
                  defaultValue={""}
                />
                <label htmlFor="eventDescription">Description</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="eventRepetition"
                  name="repetition"
                >
                  <option value="" selected>
                    No Repeat
                  </option>
                  <option value="daily">Daily </option>
                  <option value="deekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="dailyExceptHolidays">
                    Daily (except holidays)
                  </option>
                  <option value="custom">Custom</option>
                </select>
                <label htmlFor="eventRepetition">Repetition</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="eventReminder"
                  name="reminder"
                >
                  <option value="" selected>
                    30 minutes earlier
                  </option>
                  <option value="">8 am on the day</option>
                  <option value="">8 am on the day before</option>
                  <option value="">2 days earlier</option>
                  <option value="">a week earlier</option>
                </select>
                <label htmlFor="eventReminder">Reminder</label>
              </div>
              <button className="btn btn-link p-0 mb-3" type="button">
                {" "}
                <span className="fa-solid fa-plus me-2" />
                Add Reminder
              </button>
            </div>
            <div className="modal-footer d-flex justify-content-between align-items-center border-0">
              <a
                className="me-3 fs-9 text-body"
                href="events/create-an-event.html"
              >
                More options
                <span className="fas fa-angle-right ms-1 fs-10" />
              </a>
              <button className="btn btn-primary px-4" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="support-chat-container">
      <div className="container-fluid support-chat">
        <div className="card bg-body-emphasis">
          <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
            <h5 className="mb-0 d-flex align-items-center gap-2">
              Demo widget
              <span className="fa-solid fa-circle text-success fs-11" />
            </h5>
            <div className="btn-reveal-trigger">
              <button
                className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                type="button"
                id="support-chat-dropdown"
                data-bs-toggle="dropdown"
                data-boundary="window"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-reference="parent"
              >
                <span className="fas fa-ellipsis-h text-body" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-end py-2"
                aria-labelledby="support-chat-dropdown"
              >
                <a className="dropdown-item" href="#!">
                  Request a callback
                </a>
                <a className="dropdown-item" href="#!">
                  Search in chat
                </a>
                <a className="dropdown-item" href="#!">
                  Show history
                </a>
                <a className="dropdown-item" href="#!">
                  Report to Admin
                </a>
                <a className="dropdown-item btn-support-chat" href="#!">
                  Close Support
                </a>
              </div>
            </div>
          </div>
          <div className="card-body chat p-0">
            <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
              <div className="text-end mt-6">
                <a
                  className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p className="mb-0 fw-semibold fs-9">
                    I need help with something
                  </p>
                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                </a>
                <a
                  className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p className="mb-0 fw-semibold fs-9">
                    I can’t reorder a product I previously ordered
                  </p>
                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                </a>
                <a
                  className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p className="mb-0 fw-semibold fs-9">
                    How do I place an order?
                  </p>
                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                </a>
                <a
                  className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                  href="#!"
                >
                  <p className="mb-0 fw-semibold fs-9">
                    My payment method not working
                  </p>
                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                </a>
              </div>
              <div className="text-center mt-auto">
                <div className="avatar avatar-3xl status-online">
                  <img
                    className="rounded-circle border border-3 border-light-subtle"
                    src="../assets/img/team/30.webp"
                    alt=""
                  />
                </div>
                <h5 className="mt-2 mb-3">Eric</h5>
                <p className="text-center text-body-emphasis mb-0">
                  Ask us anything – we’ll get back to you here or by email within
                  24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
            <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
              <input
                className="form-control outline-none border-0 flex-1 fs-9 px-0"
                type="text"
                placeholder="Write message"
              />
              <label
                className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                htmlFor="supportChatPhotos"
              >
                <span className="fa-solid fa-image" />
              </label>
              <input
                className="d-none"
                type="file"
                accept="image/*"
                id="supportChatPhotos"
              />
              <label
                className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                htmlFor="supportChatAttachment"
              >
                {" "}
                <span className="fa-solid fa-paperclip" />
              </label>
              <input className="d-none" type="file" id="supportChatAttachment" />
            </div>
            <button className="btn p-0 border-0 send-btn">
              <span className="fa-solid fa-paper-plane fs-9" />
            </button>
          </div>
        </div>
      </div>
      <button className="btn p-0 border border-translucent btn-support-chat">
        <span className="fs-8 btn-text text-primary text-nowrap">Chat demo</span>
        <span className="fa-solid fa-circle text-success fs-9 ms-2" />
        <span className="fa-solid fa-chevron-down text-primary fs-7" />
      </button>
    </div>
  </>
  
  );
}

export default App;

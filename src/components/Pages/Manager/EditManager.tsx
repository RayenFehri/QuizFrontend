
import React, { useEffect, useRef } from 'react';
import { Calendar as FullCalendar } from 'fullcalendar'; // Importez le composant Calendar de fullcalendar
import flatpickr from 'flatpickr';
export const EditManager = () => {


  const startDateRef = useRef<HTMLInputElement>(null); // Référence au champ de date

  useEffect(() => {
    const startDateInput = startDateRef.current;

    // Vérifiez que le champ de date existe
    if (startDateInput) {
      // Initialisez Flatpickr
      flatpickr(startDateInput, {
        enableTime: true, // Activez la sélection de l'heure
        dateFormat: 'Y-m-d H:i', // Format de date et d'heure
      });
    }
  }, []);
  return (
<>
<div className="content">
  <h2 className="mb-2 lh-sm">Edit Manager</h2>
 
  <div className="mt-4">
    <div className="row g-4">
      <div className="col-12 col-xl-10 order-1 order-xl-0">
        <div className="mb-9">
          <div  className="card shadow-none border my-4" data-component-card="data-component-card" >
            <div className="card-body p-0">
           
              <div className="p-4 code-to-copy">
                <form className="row g-5 needs-validation" >

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom01"> First name </label>
                    <input className="form-control" id="validationCustom01"  type="text" defaultValue="Mark" />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom02">  Last name  </label>
                    <input  className="form-control"   id="validationCustom02" type="text" defaultValue="Otto"/>
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-9">
                    <label className="form-label" htmlFor="validationCustomUsername" > Username </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">   @  </span>
                      <input  className="form-control" id="validationCustomUsername" type="text"  aria-describedby="inputGroupPrepend"  />
                      <div className="invalid-feedback">  Please choose a username.   </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom09">Group </label>
                    <select  className="form-control" id="validationCustom09"> 
                    <option value="" disabled selected>Choose...</option>
                    <option value="1">Informatique </option>
                    <option value="2">Marketing </option>
                    <option value="3">Fin </option>
                    </select>
                    <div className="invalid-feedback">  Please provide a valid zip.   </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom06">Password </label>
                    <input  className="form-control" id="validationCustom06" type="password" />
                    <div className="invalid-feedback">  Please provide a valid zip.   </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom05">Date Of Birthday </label>
                    <input className="form-control" id="validationCustom04" type="date" ref={startDateRef}/>

                    <div className="invalid-feedback">  Please provide a valid date.   </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom08"> Joining Date</label>
                    <input className="form-control" id="validationCustom08" type="date" />
                    <div className="invalid-feedback">  Please provide a valid date.  </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom03"> Phone</label>
                    <input className="form-control" id="validationCustom03" type="text" />
                    <div className="invalid-feedback">  Please provide a valid city.  </div>
                  </div>


                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom04">  City </label>
                    <input  className="form-select" id="validationCustom04" type='text' />
                    <div className="invalid-feedback">   Please select a valid state. </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary" type="submit"> Submit form </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div
            className="card shadow-none border my-4"
            data-component-card="data-component-card"
          >   
          </div>
        </div>
      </div>
    
    </div>
  </div>
  <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
    <div
      className="toast align-items-center text-white bg-dark border-0"
      id="icon-copied-toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex" data-bs-theme="dark">
        <div className="toast-body p-3" />
        <button
          className="btn-close me-2 m-auto"
          type="button"
          data-bs-dismiss="toast"
          aria-label="Close"
        />
      </div>
    </div>
  </div>
 
</div>

</>
    )
}


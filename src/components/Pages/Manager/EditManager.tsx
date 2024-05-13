
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import flatpickr from 'flatpickr';
import { User } from '../../../Types/User.type';
import axios from 'axios';
import { group } from '../../../Types/Group';
import Swal from 'sweetalert2';


export function EditManager() {
  const startDateRef = useRef<HTMLInputElement>(null); // Référence au champ de date
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  const [firstname, setfirstName] = useState<string>('');
  const [lastname, setlastname] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [phone, setphone] = useState<string>('');
  const [birthdate, setbirthdate] = useState<string>('');
  const [joiningdate, setjoiningdate] = useState<string>('');
  const [profilepicture, setprofilepicture] = useState<string>('');
  const [groupe, setgroupe] = useState<string>('');
  const [address, setaddress] = useState<string>('');
  const [groups, setGroups] = useState<group[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<group[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/group/getAllGroup"
      );
      const groupsData: group[] = response.data.map((item: any) => ({
        idgroup: item.idgroup,
        groupname: item.groupname,
        grouplocation: item.grouplocation,
        grouphead: item.grouphead,
      }));
      setGroups(groupsData);
      setFilteredGroups(groupsData);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };




  useEffect(() => {
    fetch(`http://localhost:3000/user/getuser/${id}`)
      .then((res) => res.json())
      .then((data: any) => {
        console.log('Données récupérées de l\'API :', data); // Ajoutez ce log pour voir les données récupérées
        setUser(data);
        if (data) {
          setfirstName(data.profile.firstname);
          setlastname(data.profile.lastname);
          setemail(data.user.user.email);
          setpassword(data.user.user.password);
          setphone(data.user.user.phone);
          setbirthdate(data.profile.birthdate);
          setjoiningdate(data.profile.joiningdate);
          setprofilepicture(data.profile.profilepicture);
          setgroupe(data.profile.groupe);
          setaddress(data.profile.address);
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des détails de l\'employé:', error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }



  const handleUpdate = async (e:any) => {
    e.preventDefault(); // Empêche le rafraîchissement de la page par défaut du formulaire

  // Vérifier les champs requis
  if (!email || !firstname || !lastname || !phone || !birthdate || !joiningdate || !address || !groupe || !profilepicture || !password) {
    Swal.fire({
      title: "Error!",
      text: "Please fill in all the required fields.",
      icon: "error"
    });
    return;
  }

  // Vérifier si les dates sont au format valide
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(birthdate) || !dateRegex.test(joiningdate)) {
    Swal.fire({
      title: "Error!",
      text: "Please provide valid date formats (YYYY-MM-DD).",
      icon: "error"
    });
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/user/updateuser/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstname,
        lastname,
        phone,
        birthdate,
        joiningdate,
        address,
        groupe,
        profilepicture,
        password
      }),
    });

    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "User updated successfully!",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Error updating user",
        icon: "error"
      });
    }
  } catch (error) {
    console.error('Unexpected error updating user:', error);
    Swal.fire({
      title: "Error!",
      text: "Unexpected error occurred while updating user",
      icon: "error"
    });
  }
};





  return (
    <>
      <div className="content">
        <h2 className="mb-2 lh-sm">Edit Manager</h2>

        <div className="mt-4">
          <div className="row g-4">
            <div className="col-12 col-xl-10 order-1 order-xl-0">
              <div className="mb-9">
                <div className="card shadow-none border my-4" data-component-card="data-component-card" >
                  <div className="card-body p-0">

                    <div className="p-4 code-to-copy">
                      <form className="row g-5 needs-validation" >

                        <div className="col-md-12">
                          <label className="form-label" htmlFor="validationCustom11"> Image</label>
                          <input className="form-control" id="validationCustom11" type="text"
                            value={profilepicture}
                            onChange={(e) => setprofilepicture(e.target.value)} />
                          <div className="invalid-feedback">  Please provide a valid phone.  </div>
                        </div>


                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom01"> First name </label>
                          <input className="form-control" id="validationCustom01" type="text"
                            value={firstname}
                            onChange={(e) => setfirstName(e.target.value)} />
                          <div className="valid-feedback">Looks good!</div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom02">  Last name  </label>
                          <input className="form-control" id="validationCustom02" type="text"
                            value={lastname}
                            onChange={(e) => setlastname(e.target.value)} />
                          <div className="valid-feedback">Looks good!</div>
                        </div>

                        <div className="col-md-12">
                          <label className="form-label" htmlFor="validationCustom10" > Username </label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">   @  </span>
                            <input className="form-control" id="validationCustom10" type="text" aria-describedby="inputGroupPrepend"
                              value={email}
                              onChange={(e) => setemail(e.target.value)} />
                            <div className="invalid-feedback">  Please choose a username.   </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                              <label className="form-label" htmlFor="bootstrap-wizard-wizard-select-group">
                                Group Name
                              </label>
                              <select
                                className="form-select"
                                name="groupe"
                                value={groupe}
                                onChange={(e) => setgroupe(e.target.value)}
                                id="bootstrap-wizard-wizard-select-group"
                              >
                                <option value="">Select Group</option>
                                {filteredGroups.map(group => (
                                  <option key={group.idgroup} value={group.groupname}>{group.groupname}</option>
                                ))}
                              </select>
                             
                            </div>
                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom06">Password </label>
                          <input className="form-control" id="validationCustom06" type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)} />
                          <div className="invalid-feedback">  Please provide a valid zip.   </div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom05">Date Of Birthday </label>
                          <input className="form-control" id="validationCustom05" type="text" pattern="\d{4}-\d{2}-\d{2}" ref={startDateRef}
                            value={birthdate}
                            onChange={(e) => setbirthdate(e.target.value)} />

                          <div className="invalid-feedback">  Please provide a valid date.   </div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom08"> Joining Date</label>
                          <input className="form-control" id="validationCustom08" type="text" pattern="\d{4}-\d{2}-\d{2}"
                            value={joiningdate}
                            onChange={(e) => setjoiningdate(e.target.value)} />
                          <div className="invalid-feedback">  Please provide a valid date.  </div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom03"> Phone</label>
                          <input className="form-control" id="validationCustom03" type="text"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)} />
                          <div className="invalid-feedback">  Please provide a valid phone.  </div>
                        </div>


                        <div className="col-md-6">
                          <label className="form-label" htmlFor="validationCustom04">  Address </label>
                          <input className="form-control" id="validationCustom04" type='text'
                            value={address}
                            onChange={(e) => setaddress(e.target.value)} />
                          <div className="invalid-feedback">   Please select a valid state. </div>
                        </div>

                        <div className="col-12">
                          <button className="btn btn-primary" type="submit" onClick={handleUpdate}> Submit form </button>
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

  );
}
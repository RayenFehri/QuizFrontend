import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../../Types/User.type';

const ProfileEmployee = () => {
  let { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [lastname, setlastname] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [phone, setphone] = useState<string>('');
  const [birthdate, setbirthdate] = useState<string>('');
  const [joiningdate, setjoiningdate] = useState<string>('');
  const [profilepicture, setprofilepicture] = useState<string>('');
  const [groupe, setgroupe] = useState<string>('');
  const [address, setaddress] = useState<string>('');


  useEffect(() => {
    fetch(`http://localhost:3000/user/getuser/${id}`)
      .then((res) => res.json())
      .then((data: any) => {
        console.log('Données récupérées de l\'API :', data); // Ajoutez ce log pour voir les données récupérées
        setUser(data);
        if (data) {
          setFirstName(data.profile.firstname);
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





  return (
    <div className='content' id='top'>
      <section className="  pt-20 pb-9">
        <div className="container-small">
          <nav className="mb-5" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Page 1</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/listEmployees">Page 2</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Default
              </li>
            </ol>
          </nav>
          <div className="row align-items-center justify-content-between g-3 mb-4">
            <div className="col-auto">
              <h2 className="mb-0">Profile</h2>
            </div>
            <div className="col-auto">
              <div className="row g-2 g-sm-3">
                <div className="col-auto">
                  <button className="btn btn-phoenix-danger">
                    <span className="fas fa-trash-alt me-2" />
                    Delete employee
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-phoenix-secondary">
                    <span className="fas fa-key me-2" />
                    Reset password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 mb-6">
            <div className="col-12 col-lg-8">
              <div className="card h-100">
                <div className="card-body">
                  <div className="border-bottom border-dashed pb-4">
                    <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                      <div className="col-12 col-sm-auto">
                        {/* Input de type fichier pour permettre à l'utilisateur de sélectionner une image */}

                        {/* Affichage de l'image sélectionnée ou d'une image par défaut */}
                        <label
                          className="cursor-pointer avatar avatar-5xl"
                          htmlFor="avatarFile"
                        >
                          <img
                            className="rounded-circle"
                            src={user.profile.profilepicture} // Créer une URL d'objet pour l'image sélectionnée
                            alt=""
                          />

                        </label>
                      </div>

                      <div className="col-12 col-sm-auto flex-1">
                        <h3> {user.profile.firstname} {user.profile.lastname}</h3>
                        <p className="text-body-secondary">Joined 3 months ago</p>
                        <div>
                          <a className="me-2" href="#!">
                            <span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover" />
                          </a>
                          <a className="me-2" href="#!">
                            <span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover" />
                          </a>
                          <a href="#!">
                            <span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center pt-4">
                    <div>
                      <h6 className="mb-2 text-body-secondary">Salary</h6>
                      <h4 className="fs-7 text-body-highlight mb-0">$894</h4>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-2 text-body-secondary">Last Quiz</h6>
                      <h4 className="fs-7 text-body-highlight mb-0">1 week ago</h4>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-2 text-body-secondary">Total Quiz</h6>
                      <h4 className="fs-7 text-body-highlight mb-0">97 </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="border-bottom border-dashed">
                    <h4 className="mb-3">
                      Default Address
                      <button className="btn btn-link p-0" type="button">
                        {" "}
                        <span className="fas fa-edit fs-9 ms-3 text-body-quaternary" />
                      </button>
                    </h4>
                  </div>
                  <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                    <div className="row justify-content-between">
                      <div className="col-auto">
                        <h5 className="text-body-highlight"> {user.profile.address} </h5>
                      </div>
                      <div className="col-auto">
                        <p className="text-body-secondary">
                          {user.profile.address}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-dashed pt-4">
                    <div className="row flex-between-center mb-2">
                      <div className="col-auto">
                        <h5 className="text-body-highlight mb-0">Email</h5>
                      </div>
                      <div className="col-auto">
                        <a className="lh-1" href={`mailto:${user.email}`} >
                          {email}
                        </a>
                      </div>
                    </div>
                    <div className="row flex-between-center">
                      <div className="col-auto">
                        <h5 className="text-body-highlight mb-0">Phone</h5>
                      </div>
                      <div className="col-auto">
                        <a href={`tel:${user.phone}`}>{phone}</a>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>
        {/* end of .container*/}
      </section>

    </div>

  )
}

export default ProfileEmployee;
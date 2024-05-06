import React, { useEffect, useState } from 'react'
import { getCurrentUser, getCurrentUserId } from '../../../services/Auth/auth.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ProfileUserSignIn() {  
    
    const user = getCurrentUser(); // Récupérer les données de l'utilisateur

    const [currentuser, setUser] = useState<any>(null);
    const [firstname, setFirstName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [birthdate, setBirthdate] = useState<string>('');
    const [joiningdate, setJoiningDate] = useState<string>('');
    const [profilepicture, setProfilePicture] = useState<string>('');
    const [groupe, setGroupe] = useState<string>('');
    const [address, setAddress] = useState<string>('');
  
    useEffect(() => {
      const userId = getCurrentUserId();
      if (userId) {
        fetch(`http://localhost:3000/user/getuser/${userId}`)
          .then((res) => res.json())
          .then((data: any) => {
            console.log('Données récupérées de l\'API :', data);
            setUser(data);
            if (data) {
              setFirstName(data.profile.firstname);
              setLastName(data.profile.lastname);
              setEmail(data.user.user.email);
              setPassword(data.user.user.password);
              setPhone(data.user.user.phone);
              setBirthdate(data.profile.birthdate);
              setJoiningDate(data.profile.joiningdate);
              setProfilePicture(data.profile.profilepicture);
              setGroupe(data.profile.groupe);
              setAddress(data.profile.address);
            }
          })
          .catch((error) =>
            console.error("Erreur lors de la récupération des détails de l'utilisateur:", error)
          );
      }
    }, []);

  return (
<div className='content' id='top'>
{/* <section className="pt-20 pb-9"> */}
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
            <div className=" pb-4">
              <div className="row align-items-center mt-1 g-3 g-sm-5 text-center text-sm-start">
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
                  <p className="text-body-secondary">Joined : {user.profile.joiningdate}</p>
                
                </div>
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
                User Informations
                
              </h4>
            </div>
            <div className="pt-4 mb-7 mb-lg-4 mb-xl-1">
              
              <div className="row flex-between-center mb-2">
                <div className="col-auto">
                  <h5 className="text-body-highlight mb-0">Address</h5>
                </div>
                <div className="col-auto">
                <h5 className="text-body-highlight"> {user.profile.address} </h5>
                </div>
              </div>
             
            </div>
            <div className="pt-4 mb-7 mb-lg-4 mb-xl-5">
              
            <div className="row flex-between-center mb-2">
                <div className="col-auto">
                  <h5 className="text-body-highlight mb-0">Birth Date</h5>
                </div>
                <div className="col-auto">
                <h5 className="text-body-highlight"> {user.profile.birthdate} </h5>
                </div>
              </div>
             
            </div>
            <div className="border-top border-dashed pt-4">
  <div className="row flex-between-center mb-2">
    <div className="col-auto">
      <h5 className="text-body-highlight mb-0">Email</h5>
    </div>
    <div className="col-auto">
      <a className="lh-1" href={`mailto:${user.authenticationData.user.email}`} >
        {user.authenticationData.user.email}
      </a>
    </div>
  </div>
  <div className="row flex-between-center">
    <div className="col-auto">
      <h5 className="text-body-highlight mb-0">Phone</h5>
    </div>
    <div className="col-auto">
      <a href={`tel:${user.authenticationData.user.phone}`}>{user.authenticationData.user.phone}</a>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
   
  </div>
  {/* end of .container*/}
{/* </section> */}
</div>

  )
}

export default ProfileUserSignIn
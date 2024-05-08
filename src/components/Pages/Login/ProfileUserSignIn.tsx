import React, { useEffect, useState } from 'react'
import { getCurrentUser, getCurrentUserId } from '../../../Services/Auth/auth.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ProfileUserSignIn() {  
    
    const user = getCurrentUser(); // Récupérer les données de l'utilisateur
    const id = getCurrentUserId();

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


  
  
    const handleUpdate = async () => {
          try {
            const response = await fetch(`http://localhost:3000/user/updateuser/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                firstname , 
                lastname,
                phone,
                birthdate ,
                joiningdate,
                address,
                groupe ,
                profilepicture ,
                password
  
              }),
            });
      
            if (response.ok) {
              console.log('User updated successfully!');
            } else {
              console.error('Error updating user');
            }
          } catch (error) {
            console.error('Unexpected error updating user:', error);
          }
        };

  return (
<div className='content'>
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

    </div>
    <div className="row g-3 mb-6">
      <div className="col-12 col-lg-8">
        <div className="card h-100">
          <div className="card-body">
            <div className="border-bottom border-dashed pb-4">
              <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
    <div className="col-12 col-sm-auto">
    
      <label
        className="cursor-pointer avatar avatar-5xl"
        htmlFor="avatarFile"
      >
          <img
            className="rounded-circle"
            src={user.profile.profilepicture} 
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
           <div>
        <div className="scrollbar">
         <ul
          className="nav nav-underline fs-9 flex-nowrap mb-3 pb-1"
          id="myTab"
          role="tablist"
         >
          <li className="nav-item" >
            
            <a
              className="nav-link text-nowrap"
              id="personal-info-tab"
              data-bs-toggle="tab"
              href="#tab-personal-info"
              role="tab"
              aria-controls="tab-personal-info"
              aria-selected="true"
              
            >
              <span className="fas fa-user me-2" />
              Personal info
            </a>
          </li>
          </ul>
          </div>
          <div className="tab-content" id="profileTabContent">
         <div
          className="tab-pane fade show active"
          id="tab-orders"
          role="tabpanel"
          aria-labelledby="orders-tab"
         >
          <div
            className="border-top border-bottom border-translucent"
            id="profileOrdersTable"
            data-list='{"valueNames":["order","status","delivery","date","total"],"page":6,"pagination":true}'
          >
      <div className="table-responsive scrollbar">

            </div>
            
           </div>
               </div>
         <div
          className="tab-pane fade"
          id="tab-reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
         >
          <div
            className="border-y"
            id="profileRatingTable"
            data-list='{"valueNames":["product","rating","review","status","date"],"page":6,"pagination":true}'
          >
             
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
          
            </div>
          </div>
         </div>
          <div
          className="tab-pane fade"
          id="tab-wishlist"
          role="tabpanel"
          aria-labelledby="wishlist-tab"
         >
         
          </div>
        
         <div
          className="tab-pane fade"
          id="tab-personal-info"
          role="tabpanel"
          aria-labelledby="personal-info-tab"
          
          >
            <form>
          <div className="row g-3 mb-5">
            <div className="col-12 col-lg-6">
              <label
                className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                htmlFor="fullName"
              >
                FirstName
              </label>
              <input
                className="form-control"
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)} 
                
                placeholder="Full name"
              />
            </div>
            <div className="col-12 col-lg-6">
              <label
                className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                htmlFor="gender"
              >
                LastName
              </label>
              <input
                className="form-control"
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)} 
                
                placeholder="Full name"
              />
            </div>
            <div className="col-12 col-lg-6">
              <label
                className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="form-control"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row g-2 gy-lg-0">
                <label className="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">
                  Date of birth
                </label>
               
                <input
                className="form-control"
                id="data"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
                
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <label
                className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="form-control"
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={'+1234567890'}
              />
            </div>
            <div className="col-12 col-lg-6">
              <label
                className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm"
                htmlFor="alternative_phone"
              >
                Joining Date
              </label>
              <input
                className="form-control"
                id="joiningdate"
                type="date"
                value={joiningdate}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>

            <div className="col-12 col-lg-12">
              <label
                className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm"
                htmlFor="alternative_phone"
              >
                Address
              </label>
              <textarea
                className="form-control"
                id="joiningdate"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
      
           
          
            </div>
            <div className="text-end">
            <button className="btn btn-primary" type="submit" onClick={handleUpdate}> Submit form </button>

         </div>
            </form>
        
        </div>
      </div>
    </div>
  </div>
  {/* end of .container*/}
</section>

</div>

  )
}

export default ProfileUserSignIn
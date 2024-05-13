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
    <div className='content'>
      <section className="  pt-2 pb-6" >
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
      
          <div className="row g-3 mb-6">
            <div className="col-12 col-lg-8">
              <div className="card h-100">
                <div className="card-body">
                  <div className=" pb-4">
                    <div className="row align-items-center mt-1 g-3 g-sm-5 text-center text-sm-start">
                      <div className="col-12 col-sm-auto">

                        <label
                          className="cursor-pointer avatar avatar-5xl"
                          htmlFor="avatarFile"
                        >
                          <img
                            className="rounded-circle"
                            src= '../../../assets/img/favicons/UserAvatar.png'
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
                  <div className="border-top border-dashed pt-4">
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
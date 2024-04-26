import { faEye, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { profile } from 'console'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

export interface User {
  id: string
  email?: string
  phone?: string
  profile: {
    joiningdate: string
    groupe: string
    idprofile: string
    firstname: string
    lastname: string
    birthdate: string | null
    address: string | null
   
  }
}


export const ListEmployees = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const scrollPositionRef = useRef<number>(0); // Référence pour enregistrer la position de défilement

  // Liste users
  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data: any[]) => {
        console.log("Données utilisateurs reçues :", data);
        const usersData = data.map(item => ({
          id: item.user.id,
          email: item.user.email,
          phone: item.user.phone,
          profile: item.profile
        }));
        setUsers(usersData);
        setFilteredUsers(usersData);
      })
      .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }, []);


  const deleteUser = async (id: string) => {
    if (id === undefined) {
      console.error('User ID is undefined');
      return;
    }
  
    const userToDelete = users.find(user => user.id === id);
    if (!userToDelete) {
      console.error('User not found');
      return;
    }
    const username = userToDelete.email;
  
    const confirmDelete = await Swal.fire({
      title: `Are you sure?`,
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    });
  
    if (confirmDelete.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/user/remove/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('User deleted successfully!');
          const updatedUsers = users.filter(user => user.id !== id);
          setUsers(updatedUsers);
          setFilteredUsers(prevFilteredUsers => prevFilteredUsers.filter(user => user.id !== id));
  
          // Restore scroll position after deletion
          document.getElementById('customers-table-body')!.scrollTop = scrollPositionRef.current;
          
          await Swal.fire({
            title: 'Deleted!',
            text: ' User has been deleted.',
            icon: 'success'
          });
        } else {
          console.error('Error deleting user');
        }
      } catch (error) {
        console.error('Unexpected error deleting user:', error);
      }
    } else if (confirmDelete.dismiss === Swal.DismissReason.cancel) {
      await Swal.fire({
        title: 'Cancelled',
        text: `User is safe :)`,
        icon: 'error'
      });
    }
  };

  // Filtrer les utilisateurs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = users.filter(
      (user) => user.profile.firstname?.toLowerCase().includes(e.target.value)
    );
    setFilteredUsers(filter);
  };



  return (
    <>
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
        <div className="mb-9">
          <div className="row g-2 mb-4">
            <div className="col-auto">
              <h2 className="mb-0">Employees</h2>
            </div>
          </div>
          <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span>All </span>
                <span className="text-body-tertiary fw-semibold">(68817)</span>
              </a>
            </li>
          </ul>
          <div
            id="products"
            data-list='{"valueNames":["customer","email","total-orders","total-spent","city","last-seen","last-order"],"page":10,"pagination":true}'
          >
            <div className="mb-4">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="search-box">
                    <form className="position-relative" data-bs-toggle="search" data-bs-display="static">
                      <input
                        className="form-control search-input search"
                        type="search"
                        placeholder="Search customers"
                        aria-label="Search"
                        onChange={handleChange}
                      />
                      <span className="fas fa-search search-box-icon" />
                    </form>
                  </div>
                </div>
                <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">

                </div> 
                <div className="col-auto">
                  <button className="btn btn-link text-body me-4 px-0">
                    <span className="fa-solid fa-file-export fs-9 me-2" />
                    Export
                  </button>
                  <button className="btn btn-primary">
                    <span className="fas fa-plus me-2" />
                    Add employee
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
              <div className="table-responsive scrollbar-overlay mx-n1 px-1">

                <table className="table table-sm fs-9 mb-0">
                  <thead>
                    <tr>
                      <th className="white-space-nowrap fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select='{"body":"customers-table-body"}' />
                        </div>
                      </th>
                      <th className="align-middle pe-5" scope="col"  data-sort="last-order" style={{ width: "10%" }}>Employee</th>
                      <th className="align-middle pe-5" scope="col"  data-sort="last-order" style={{ width: "10%" }}>EMAIL</th>
                      <th className="align-middle text-end" scope="col"  data-sort="last-order" style={{ width: "20%" }}>PHONE</th>
                      <th className="align-middle text-end" scope="col"  data-sort="last-order" style={{ width: "10%" }}>Group</th>
                      <th className="align-middle" scope="col"  data-sort="last-order" style={{ width: "10%" }}>CITY</th>
                      <th className="align-middle text-end"  data-sort="last-order" scope="col" style={{ width: "15%" }}>DATE OF BIRTHDAY</th>
                      <th className="align-middle text-end" scope="col"  data-sort="last-order" style={{ width: "15%" }}>JOINING DATE</th>
                      <th className="align-middle text-end pe-0" scope="col"  data-sort="last-order" style={{ width: "10%", minWidth: 150 }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="list" id="customers-table-body">
                    {filteredUsers.map((user, index) => (
                      <tr key={user.id} className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-m">
                              <img className="rounded-circle" src="../../../assets/img/team/32.webp" alt="" />
                            </div>
                            <p className="mb-0 ms-3 fw-bold">{user.profile.firstname} {user.profile.lastname}</p>
                          </div>
                        </td>
                        <td className="align-middle"><a className="fw-semibold" href={`mailto:${user.email}`}>{user.email}</a></td>
                        <td className="align-middle text-end fw-semibold">{user.phone}</td>
                        <td className="align-middle text-end">{user.profile.groupe}</td>
                        <td className="align-middle">{user.profile.address}</td>
                        <td className="align-middle text-end">{user.profile.birthdate}</td>
                        <td className="align-middle text-end">{user.profile.joiningdate}</td>
                        <td className="align-middle text-end">
                          <Link to={`/editEmployee/${user.id}`} className="me-2"><FontAwesomeIcon icon={faUserEdit} style={{ color: "#1662e3" }} /></Link>
                          <a href="#" className="me-2" onClick={() => deleteUser(user.id)}><FontAwesomeIcon icon={faUserTimes} style={{ color: "#ee1127" }} /></a>
                          <Link to={`/profileEmployee/${user.id}`} ><FontAwesomeIcon icon={faEye} style={{ color: "#fb983c" }} /></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                <div className="col-auto d-flex">
                  <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info" />
                  <a className="fw-semibold" href="#!" data-list-view="*">
                    View all
                    <span className="fas fa-angle-right ms-1" data-fa-transform="down-1" />
                  </a>
                  <a className="fw-semibold d-none" href="#!" data-list-view="less">
                    View Less
                    <span className="fas fa-angle-right ms-1" data-fa-transform="down-1" />
                  </a>
                </div>
                <div className="col-auto d-flex">
                  <button className="page-link" data-list-pagination="prev">
                    <span className="fas fa-chevron-left" />
                  </button>
                  <ul className="mb-0 pagination" />
                  <button className="page-link pe-0" data-list-pagination="next">
                    <span className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
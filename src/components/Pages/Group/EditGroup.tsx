import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { group } from "../../../Types/Group";
import Swal from 'sweetalert2';
import { User } from "../../../Types/User.type";
import axios from "axios";

const EditGroup= () => {
  const { idgroup } = useParams();
  const [groupData, setGroupData] = useState<group | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const [groupName, setGroupName] = useState<string>('');
  const [groupLocation, setGroupLocation] = useState<string>('');
  
  const [formData, setFormData] = useState({
    groupname: "",
    grouplocation: "",
    grouphead: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      const userData = response.data.filter((user: any) => user.user.user_metadata.role === 2)
        .map((item: any) => ({
          id: item.user.id,
          email: item.user.email,
          phone: item.user.phone,
          profile: item.profile,
        }));
      setUsers(userData);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/group/getOneGroup/${idgroup}`)
      .then((res) => res.json())
      .then((data: any) => {
        console.log('Data fetched from the API:', data); // Ajoutez ce log pour voir les données récupérées
        setGroupData(data);
        if (data) {
          setGroupName(data.groupname);
          setFormData(data.grouphead);
          setGroupLocation(data.grouplocation);
          
        }
      })
      .catch((error) => console.error('Error fetching group details:', error));
  }, [idgroup]);

  if (!groupData) {
    return <div>Loading...</div>;
  }
  const handleUpdate = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/group/updateGroup/${idgroup}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          groupname: groupName, 
          grouplocation: groupLocation,
          grouphead: formData.grouphead,
        }),
      });

      if (response.ok) {
        console.log('group updated successfully!');
        Swal.fire({
          title: "Success!",
          text: "Group updated successfully!",
          icon: "success"
        }).then(() => {
          navigate('/listgroup');
        });
      } else {
        console.error('Error updating group');
        Swal.fire({
          title: "Error!",
          text: "Error updating group",
          icon: "error"
        });
      }
    } catch (error) {
      console.error('Unexpected error updating group:', error);
      Swal.fire({
        title: "Error!",
        text: "Unexpected error occurred while updating group",
        icon: "error"
      });
    }
  };

    return (
    <>
     
     <div className="content">
  <nav className="mb-2 " aria-label="breadcrumb">
    
  </nav>
  <h2 className="mb-4">Edit Group</h2>
  <div className="row">
    <div className="col-xl-9">
      <form className="row g-3 mb-6" onSubmit={handleUpdate}>
        <div className="col-sm-6 col-md-8">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputGrid"
              type="text"
              placeholder="Group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}

            />
            <label htmlFor="floatingInputGrid">New group name</label>  
          </div>  
        </div>
      
        <div className="col-sm-6 col-md-4">
          <div className="form-floating">
          <select
                    className="form-select"
                    id="floatingSelectTask"
                    name="grouphead"
                    value={formData.grouphead}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Group Head</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.profile.firstname} {user.profile.lastname}
                      </option>
                    ))}
                  </select>
            <label htmlFor="floatingSelectTask">Group Head</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
                <div className="form-floating ">
                  <input
                    className="form-control"
                    id="floatingInputBudget"
                    type="text"
                    placeholder="Budget"
                    value={groupLocation}
                    onChange={(e) => setGroupLocation(e.target.value)}
                  />
                  <label htmlFor="floatingInputBudget">Location</label>
                </div>
              </div>
        <div className="col-12 gy-6">
          <div className="row g-3 justify-content-end">
            <div className="col-auto">
              <button className="btn btn-phoenix-primary px-5">Cancel</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary px-5 px-sm-15">
                Update Group
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  </div>
 

    </>
    )
}
export default EditGroup;
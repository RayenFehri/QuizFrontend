import {
  faHome,
  faListAlt,
  faPlusSquare,
  faQuestion,
  faUser,
  faUserShield,
  faUserPlus,
  faList,
  faLayerGroup,
  faTrash,
  faTrashAlt,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { group } from "../../../Types/Group";
import Swal from "sweetalert2";

const ListGroup = () => {
  const [groups, setGroups] = useState<group[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<group[]>([]);

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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = groups.filter((grp) =>
      grp.groupname?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredGroups(filter);
  };
  const handleRemoveGroup = async (idgroup: string) => {
    try {
      const confirmDelete = await Swal.fire({
        title: `Are you sure?`,
        text: `You won't be able to revert this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });
  
      if (confirmDelete.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:3000/group/deleteGroup/${idgroup}`
        );
  
        if (response.status === 200) {
          // Remove the category from the list
          setGroups(groups.filter((grp) => grp.idgroup !== idgroup));
          setFilteredGroups(
            filteredGroups.filter((grp) => grp.idgroup !== idgroup)
          );
          console.log("Group removed successfully!");
  
          await Swal.fire({
            title: "Deleted!",
            text: "Group has been deleted.",
            icon: "success",
          });
        } else {
          console.error("Error removing group");
        }
      } else if (confirmDelete.dismiss === Swal.DismissReason.cancel) {
        await Swal.fire({
          title: "Cancelled",
          text: `Action cancelled.`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Unexpected error removing group:", error);
    }
  };
  
  return (
    <>
      <div className="content">
        <div className="">
          {/* ----------------------- Little Navbar (page1 page2 default)-----------------*- */}
          <nav className="mb-2" aria-label="breadcrumb ">
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
          {/* ----------------------- List of all quizes ------------------------------------- */}
          <div className="mb-9 ">
            <div
              id="projectSummary"
              data-list='{"valueNames":["projectName","assigness","start","deadline","task","projectprogress","status","action"],"page":6,"pagination":true}'
            >
              <div className="row mb-4 gx-6 gy-3 align-items-center ">
                <div className="col-auto">
                  <h2 className="mb-0">
                    Groupes
                    <span className="fw-normal text-body-tertiary ms-3">
                      ({groups.length})
                    </span>
                  </h2>
                </div>
                <div className="col-auto ">
                  <a className="btn btn-primary px-5" href="/creategroup">
                    <i className="fa-solid fa-plus me-2" />
                    Create new Group
                  </a>
                </div>
              </div>
              <div className="row g-3 justify-content-between align-items-end mb-4 ">
                {/* ------------------- All , ongoing , Finished , Postponed .... -------------------------------------------- */}

                <div className="col-12 col-sm-auto ">
                  <ul className="nav nav-links mx-n2">
                    <li className="nav-item">
                      <a
                        className="nav-link px-2 py-1 active"
                        aria-current="page"
                        href="#"
                      >
                        <span>All</span>
                        <span className="text-body-tertiary fw-semibold">
                          ({groups.length})
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="d-flex align-items-center">
                    {/*  ------------------------------------------Search Bar------------------------------------------------- */}
                    <div className="search-box me-3">
                      <form
                        className="position-relative"
                        data-bs-toggle="search"
                        data-bs-display="static"
                      >
                        <input
                          className="form-control search-input search"
                          type="search"
                          placeholder="Search group"
                          aria-label="Search"
                          onChange={handleChange}
                        />
                        <span className="fas fa-search search-box-icon" />
                      </form>
                    </div>
                    {/* ----------------------------------------------------------------------- */}
               
               
           
                  </div>
                </div>
              </div>
              <div className="table-responsive scrollbar ">
                <table className="table fs-9 mb-0 border-top border-translucent  ">
                  <thead>
                    <tr>
                      <th
                        className="sort white-space-nowrap align-middle ps-0"
                        scope="col"
                        data-sort="projectName"
                        style={{ width: "30%" }}
                      >
                        GROUP NAME
                      </th>
       
                      <th
                        className="sort align-middle text-end"
                        scope="col"
                        style={{ width: "10%" }}
                      />
                    </tr>
                  </thead>
                  <tbody className="list " id="project-list-table-body">
                    {filteredGroups.map((group, index) => (
                      <tr key={group.idgroup} className="position-static">
                        <td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                          <a className="fw-bold fs-8" href="#">
                            {group.groupname}
                          </a>
                        </td>

                        <td className="align-middle text-end white-space-nowrap pe-0 action">
                          <div className="btn-reveal-trigger position-static">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              
                              <Link
                                className="dropdown-item"
                                to={`/editgroup/${group.idgroup}`}
                              >
                                <FontAwesomeIcon
                                  className="ms-4"
                                  icon={faEdit}
                                />
                                Edit
                              </Link>
                              <div className="dropdown-divider" />
                              <button
                                id="removeButton"
                                className="dropdown-item text-danger"
                                onClick={() => handleRemoveGroup(group.idgroup)}
                              >
                                <FontAwesomeIcon
                                  className="ms-4"
                                  icon={faTrashAlt}
                                />
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between py-3 pe-0 fs-9 border-bottom border-translucent">
                <div className="d-flex">
                  <p
                    className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                    data-list-info="data-list-info"
                  />
                  <a className="fw-semibold" href="#!" data-list-view="*">
                    View all
                    <span
                      className="fas fa-angle-right ms-1"
                      data-fa-transform="down-1"
                    />
                  </a>
                  <a
                    className="fw-semibold d-none"
                    href="#!"
                    data-list-view="less"
                  >
                    View Less
                    <span
                      className="fas fa-angle-right ms-1"
                      data-fa-transform="down-1"
                    />
                  </a>
                </div>
                <div className="d-flex">
                  <button className="page-link" data-list-pagination="prev">
                    <span className="fas fa-chevron-left" />
                  </button>
                  <ul className="mb-0 pagination" />
                  <button
                    className="page-link pe-0"
                    data-list-pagination="next"
                  >
                    <span className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------- Footer ----------------------------------------------------  */}
          
        </div>
      </div>
    </>
  );
};

export default ListGroup;
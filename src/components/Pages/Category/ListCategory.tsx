import { faHome , faListAlt , faPlusSquare, faQuestion , faUser ,faUserShield ,faUserPlus, faList, faLayerGroup, faTrash, faTrashAlt, faEdit, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import {category} from '../../../Types/Category.type';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ListCategories = () => {
  const [categories, setCategories] = useState<category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<category[]>([]);
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/category/findallCategories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const categoriesData: category[] = await response.json();
      setCategories(categoriesData);
      setFilteredCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = categories.filter(
      (cat) => cat.categoryname?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCategories(filter);
  };
  const handleRemoveCategory = async (idcategory: string) => {
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
        const response = await fetch(`http://localhost:3000/category/deleteCategory/${idcategory}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // Remove the category from the list
          setCategories(categories.filter((cat) => cat.idcategory !== idcategory));
          setFilteredCategories(filteredCategories.filter((cat) => cat.idcategory !== idcategory));
          console.log('Category removed successfully!');
  
          await Swal.fire({
            title: "Deleted!",
            text: "Category has been deleted.",
            icon: "success",
          });
        } else {
          console.error('Error removing category');
        }
      } else if (confirmDelete.dismiss === Swal.DismissReason.cancel) {
        await Swal.fire({
          title: "Cancelled",
          text: `Action cancelled.`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error('Unexpected error removing category:', error);
    }
  };

    return (
        <>
<div className="content col-md-10"> 
  <div className="">
    {/* ----------------------- Little Navbar (page1 page2 default)-----------------*- */}
    <nav className="mb-2"  aria-label="breadcrumb ">
      
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
              Categories
              <span className="fw-normal text-body-tertiary ms-3">({categories.length})</span>
            </h2>
          </div>
          <div className="col-auto ">
            <a className="btn btn-primary px-5" href="/createcategory">
              <i className="fa-solid fa-plus me-2" />
              Create new Category
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
                  <span className="text-body-tertiary fw-semibold">({categories.length})</span>
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
                    placeholder="Search category"
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
                  CATEGORY NAME
                </th>
                 <th
                  className="sort align-middle text-end"
                  scope="col"
                  style={{ width: "10%" }}
                />
              </tr>
            </thead>
            <tbody className="list " id="project-list-table-body">
              {filteredCategories.map((category,index)=>
              <tr key={category.idcategory} className="position-static">
                <td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a className="fw-bold fs-8" href="#" >{category.categoryname}
                    
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

                      <Link className="dropdown-item" to={`/editcategory/${category.idcategory}`}>
                      <FontAwesomeIcon className='ms-4' icon={faEdit} /> 

                        Edit

                      </Link>
                      <div className="dropdown-divider" />
                      <button  id="removeButton" className="dropdown-item text-danger" onClick={() => handleRemoveCategory(category.idcategory)}>
                      <FontAwesomeIcon className='ms-4' icon={faTrashAlt} /> 

                        Remove   
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              )}
              
            
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
            <a className="fw-semibold d-none" href="#!" data-list-view="less">
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
            <button className="page-link pe-0" data-list-pagination="next">
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

      

    )

}

export default ListCategories;
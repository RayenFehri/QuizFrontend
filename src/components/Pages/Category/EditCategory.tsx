import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { category } from '../../../Types/Category.type';
import Swal from 'sweetalert2';

export function EditCategory () {
  const { idcategory } = useParams();
  const [categoryData, setCategoryData] = useState<category | null>(null);
  const [categoryName, setcategoryName] = useState<string>(''); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/category/findOneCategory/${idcategory}`)
      .then((res) => res.json())
      .then((data: any) => {
        console.log('Data fetched from the API:', data); // Ajoutez ce log pour voir les données récupérées
        setCategoryData(data);
        if (data) {
          setcategoryName(data.categoryname);
          
        }
      })
      .catch((error) => console.error('Error fetching category details:', error));
  }, [idcategory]);

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  const handleUpdate = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/category/updateCategory/${idcategory}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          new_categoryname: categoryName, 
        }),
      });

      if (response.ok) {
        console.log('Category updated successfully!');
        Swal.fire({
          title: "Success!",
          text: "Category updated successfully!",
          icon: "success"
        }).then(() => {
          navigate('/listcategory');
        });
      } else {
        console.error('Error updating category');
        Swal.fire({
          title: "Error!",
          text: "Error updating category",
          icon: "error"
        });
      }
    } catch (error) {
      console.error('Unexpected error updating category:', error);
      Swal.fire({
        title: "Error!",
        text: "Unexpected error occurred while updating category",
        icon: "error"
      });
    }
  };

    return (
    <>
     
    <div className="content">
  <nav className="mb-2 " aria-label="breadcrumb">
    
  </nav>
  <h2 className="mb-4">Edit Category</h2>
  <div className="row">
    <div className="col-xl-9">
      <form className="row g-3 mb-6" onSubmit={handleUpdate}>
        <div className="col-sm-6 col-md-8">
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputGrid"
              type="text"
              placeholder="Project title"
              value={categoryName}
                     onChange={(e) => setcategoryName(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">new category name</label>
          </div>
        </div>
        
        <div className="col-12 gy-6">
          <div className="row g-3 justify-content-end">
            <div className="col-auto">
              <button className="btn btn-phoenix-primary px-5">Cancel</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary px-5 px-sm-15"  type="submit">
                Update Category
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <footer className="footer position-absolute">
    <div className="row g-0 justify-content-between align-items-center h-100">
      <div className="col-12 col-sm-auto text-center">
        <p className="mb-0 mt-2 mt-sm-0 text-body">
          Thank you for creating with Phoenix
          <span className="d-none d-sm-inline-block" />
          <span className="d-none d-sm-inline-block mx-1">|</span>
          <br className="d-sm-none" />
          2023 ©
          <a className="mx-1" href="https://themewagon.com/">
            Themewagon
          </a>
        </p>
      </div>
      <div className="col-12 col-sm-auto text-center">
        <p className="mb-0 text-body-tertiary text-opacity-85">v1.14.0</p>
      </div>
    </div>
  </footer>
  </div>
 

    </>
    )
}
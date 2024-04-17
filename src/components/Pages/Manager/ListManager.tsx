import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserEdit,faUserTimes, faUsersViewfinder  } from '@fortawesome/free-solid-svg-icons';
export const ListManager = () => {

  return (
<>
<div className="content">
  <nav className="mb-2" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item">
        <a href="/">Page 1</a>
      </li>
      <li className="breadcrumb-item active">Default</li>
    </ol>
  </nav>
  <div className="mb-9">
    <div className="row g-2 mb-4">
      <div className="col-auto">
        <h2 className="mb-0">Managers</h2>
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
              <form
                className="position-relative"
                data-bs-toggle="search"
                data-bs-display="static"
              >
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Search customers"
                  aria-label="Search"
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
              Add manager
            </button>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1 ">
        <div className="table-responsive scrollbar-overlay mx-n1 px-1">

          <table className="table table-sm fs-9 mb-0">

            <thead>
              <tr>
                <th className="white-space-nowrap fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input"  id="checkbox-bulk-customers-select"  type="checkbox" data-bulk-select='{"body":"customers-table-body"}'/>
                  </div>
                </th>
                <th  className="sort align-middle pe-5" scope="col" data-sort="customer" style={{ width: "10%" }} > Manager</th>
                <th className="sort align-middle pe-5" scope="col"     data-sort="email" style={{ width: "20%" }} > EMAIL </th>
                <th className="sort align-middle text-end" scope="col"  data-sort="total-orders" style={{ width: "10%" }} > PHONE  </th>
                <th className="sort align-middle text-end" scope="col"  data-sort="total-orders" style={{ width: "10%" }} > Group  </th>
                <th  className="sort align-middle ps-7" scope="col"  data-sort="city"     style={{ width: "25%" }}>  CITY  </th>
                <th className="sort align-middle text-end" scope="col" data-sort="last-seen" style={{ width: "15%" }} > DATE OF BIRHDAY </th>
                <th className="sort align-middle text-end" scope="col"  data-sort="last-seen" style={{ width: "15%" }} > JOINING DATE  </th>
                <th  className="sort align-middle text-end pe-0"  scope="col"  data-sort="last-order" style={{ width: "10%", minWidth: 150 }}  > ACTION </th>
             </tr>
            </thead>


            <tbody className="list" id="customers-table-body">
              <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                <td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      data-bulk-select-row='{"customer":{"avatar":"/team/32.webp","name":"Carry Anna"},"email":"annac34@gmail.com","city":"Budapest","totalOrders":89,"totalSpent":23987,"lastSeen":"34 min ago","lastOrder":"Dec 12, 12:56 PM"}'
                    />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap pe-5">
                  <a className="d-flex align-items-center text-body-emphasis" href="customer-details.html">
                    <div className="avatar avatar-m">
                      <img className="rounded-circle" src="../../../assets/img/team/32.webp" alt="" />
                    </div>
                    <p className="mb-0 ms-3 text-body-emphasis fw-bold">Carry Anna</p> 
                    </a>
                </td>
                <td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:annac34@gmail.com">annac34@gmail.com</a></td>
                <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight"> +216 56025602</td>
                <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight"> Informatique</td>
                <td className="city align-middle white-space-nowrap text-body-highlight ps-7">Tunisia</td>
                <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end"> 2002-12-09</td>
                <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end"> 2024-02-15</td>
                <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
                   <a href="/editManager"  className="me-2"><FontAwesomeIcon icon={faUserEdit} style={{color: "#1662e3",}} /></a>
                   <a href="#" className="me-2"><FontAwesomeIcon icon={faUserTimes} style={{color: "#ee1127"}} /></a>
                   <a href="/profileManager"  className="me-2"><FontAwesomeIcon icon={faEye} style={{color: "#fb983c",}} /></a>
                   
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
          <div className="col-auto d-flex">
            <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info" />
            <a className="fw-semibold" href="#!" data-list-view="*">
              View all
              <span className="fas fa-angle-right ms-1"  data-fa-transform="down-1" />
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

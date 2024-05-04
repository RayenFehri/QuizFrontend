import React from 'react'
import MyEChartsComponent from '../../Design/echarts'
import FeatherIcon from 'feather-icons-react';

function ReportDetail() {
  return (
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
  <div className="pb-9">
    <h2 className="mb-4">Purchasers and sellers</h2>
    <div className="row g-3 justify-content-between mb-4">
      <div className="col-auto">
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary">
            <span className="fas fa-envelope me-2" />
            Send mail
          </button>
          <button className="btn btn-phoenix-primary">
            <span className="fas fa-pencil me-2" />
            Edit
          </button>
          <button className="btn btn-phoenix-secondary text-body">
            <span className="fa-solid fa-file-export fs-9 me-2" />
            Export
          </button>
        </div>
      </div>
      <div className="col-auto">
        <div className="d-flex">
          <div className="search-box me-2 d-none d-xl-block">
            <form
              className="position-relative"
              data-bs-toggle="search"
              data-bs-display="static"
            >
              <input
                className="form-control search-input search"
                type="search"
                placeholder="Search by name"
                aria-label="Search"
              />
              <span className="fas fa-search search-box-icon" />
            </form>
          </div>
          <button className="btn px-3 btn-phoenix-secondary me-2 d-xl-none">
            <span className="fa-solid fa-search" />
          </button>
          <button
            className="btn px-3 btn-phoenix-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
            data-boundary="window"
            aria-haspopup="true"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span className="fa-solid fa-filter" data-fa-transform="down-3" />
          </button>
          <div className="modal fade" id="filterModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border border-translucent">
                <form id="addEventForm" autoComplete="off">
                  <div className="modal-header border-translucent p-4">
                    <h5 className="modal-title text-body-highlight fs-6 lh-sm">
                      Filter
                    </h5>
                    <button
                      className="btn p-1 text-body"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span className="fas fa-times fs-9" />
                    </button>
                  </div>
                  <div className="modal-body pt-4 pb-2 px-4">
                    <div className="mb-3">
                      <label
                        className="fw-bold mb-2 text-body-highlight"
                        htmlFor="leadStatus"
                      >
                        Lead Status
                      </label>
                      <select className="form-select" id="leadStatus">
                        <option value="newLead" selected>
                          New Lead
                        </option>
                        <option value="coldLead">Cold Lead</option>
                        <option value="wonLead">Won Lead</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        className="fw-bold mb-2 text-body-highlight"
                        htmlFor="createDate"
                      >
                        Create Date
                      </label>
                      <select className="form-select" id="createDate">
                        <option value="today" selected>
                          Today
                        </option>
                        <option value="last7Days">Last 7 Days</option>
                        <option value="last30Days">Last 30 Days</option>
                        <option value="chooseATimePeriod">
                          Choose a time period
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        className="fw-bold mb-2 text-body-highlight"
                        htmlFor="designation"
                      >
                        Designation
                      </label>
                      <select className="form-select" id="designation">
                        <option value="VPAccounting" selected>
                          VP Accounting
                        </option>
                        <option value="ceo">CEO</option>
                        <option value="creativeDirector">
                          Creative Director
                        </option>
                        <option value="accountant">Accountant</option>
                        <option value="executiveManager">
                          Executive Manager
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">
                    <button
                      className="btn btn-sm btn-phoenix-primary px-4 fs-10 my-0"
                      type="submit"
                    >
                      {" "}
                      <span className="fas fa-arrows-rotate me-2 fs-10" />
                      Reset
                    </button>
                    <button
                      className="btn btn-sm btn-primary px-9 fs-10 my-0"
                      type="submit"
                    >
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row gy-5">
      <div className="col-xl-5 col-xxl-4">
        <div className="card">
          <div className="card-body">
         
            <MyEChartsComponent />
            <div className="table-responsive scrollbar">
              <table className="reports-details-chart-table table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="align-middle pe- text-body-tertiary fw-bold fs-10 text-uppercase text-nowrap"
                      scope="col"
                      style={{ width: "35%" }}
                    >
                      Report stage
                    </th>
                    <th
                      className="align-middle text-end ps-4 text-body-tertiary fw-bold fs-10 text-uppercase text-nowrap"
                      scope="col"
                      style={{ width: "35%" }}
                    >
                      total count
                    </th>
                    <th
                      className="align-middle text-end ps-4 text-body-tertiary fw-bold fs-10 text-uppercase"
                      scope="col"
                      style={{ width: "30%" }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="report-data-body">
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
                      Analysis
                    </td>
                    <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
                      03
                    </td>
                    <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                      <span className="badge badge-phoenix badge-phoenix-info">
                        +15.21%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
                      Statement
                    </td>
                    <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
                      01
                    </td>
                    <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                      <span className="badge badge-phoenix badge-phoenix-warning">
                        +05.21%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
                      Action
                    </td>
                    <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
                      02
                    </td>
                    <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                      <span className="badge badge-phoenix badge-phoenix-primary">
                        +22.12%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
                      Offering
                    </td>
                    <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
                      02
                    </td>
                    <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                      <span className="badge badge-phoenix badge-phoenix-danger">
                        -14.21%
                      </span>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
                      Interlocution
                    </td>
                    <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
                      02
                    </td>
                    <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                      <span className="badge badge-phoenix badge-phoenix-danger">
                        -14.21%
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-xxl-8">
        <div className="border-top border-translucent">
          <div
            id="purchasersSellersTable"
            data-list='{"valueNames":["deals_name","deal_owner","account_name","stage","amount"],"page":10,"pagination":true}'
          >
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 leads-table">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-0"
                      style={{ maxWidth: 20, width: 18 }}
                    >
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select='{"body":"purchasers-sellers-body"}'
                        />
                      </div>
                    </th>
                    <th
                      className="sort align-middle ps-0 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="deals_name"
                      style={{ minWidth: 120 }}
                    >
                      Deal name
                    </th>
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="deal_owner"
                      style={{ minWidth: 50 }}
                    >
                      Deal owner
                    </th>
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="account_name"
                      style={{ minWidth: 250 }}
                    >
                      Account name
                    </th>
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="stage"
                      style={{ minWidth: 160 }}
                    >
                      Stage
                    </th>
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="amount"
                      style={{ minWidth: 50 }}
                    >
                      Amount
                    </th>
                    <th
                      className="sort text-end align-middle pe-0 ps-4"
                      scope="col"
                    />
                  </tr>
                </thead>
                <tbody className="list" id="purchasers-sellers-body">
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Jo_Td01","dealOwner":{"avatar":"team/avatar.webp","name":"Ally Aagaard","placeholder":true},"accountName":"Themewagon","stage":{"label":"Analysis","color":"#3874FF","data":20},"amount":{"totalAmount":"$140","icon":"trending-down","color":"text-danger"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Jo_Td01
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Analysis</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $140
                      <span
                        className="ms-2 text-danger"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      >
                      <FeatherIcon icon="trending-down" />
  </span>
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Printing Dimensions","dealOwner":{"avatar":"/team/35.webp","name":"Alex Abadi"},"accountName":"Black Box","stage":{"label":"Statement","color":"#0097EB","data":40},"amount":{"totalAmount":"$214","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Printing Dimensions
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/35.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Alex Abadi
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Black Box
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Statement</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $214
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      >  <FeatherIcon icon="trending-up" />
                      </span>
                        
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"MM_TD_120","dealOwner":{"avatar":"/team/32.webp","name":"Kylia Abbott"},"accountName":"Hunter Leader","stage":{"label":"Action","color":"#E5780B","data":50},"amount":{"totalAmount":"$412","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        MM_TD_120
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/32.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Kylia Abbott
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Hunter Leader
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Action</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $412
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Truhlar And Truhlar Attys","dealOwner":{"avatar":"/team/32.webp","name":"Kylia Abbott"},"accountName":"Eagle Eye","stage":{"label":"Offering","color":"#6E7891","data":60},"amount":{"totalAmount":"$110","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Truhlar And Truhlar Attys
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/32.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Kylia Abbott
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Eagle Eye
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Offering</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $110
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Morlong Associates","dealOwner":{"avatar":"/team/59.webp","name":"Lyla Nicole"},"accountName":"Black Box","stage":{"label":"Negotiation","color":"#25B003","data":100},"amount":{"totalAmount":"$325","icon":"trending-down","color":"text-danger"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Morlong Associates
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/59.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Lyla Nicole
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Black Box
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Negotiation</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $325
                      <span
                        className="ms-2 text-danger"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Product Order","dealOwner":{"avatar":"/team/18.webp","name":"Hunter Leader"},"accountName":"Themewagon","stage":{"label":"Negotiation","color":"#25B003","data":100},"amount":{"totalAmount":"$198","icon":"trending-down","color":"text-warning"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Product Order
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/18.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Hunter Leader
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Negotiation</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $198
                      <span
                        className="ms-2 text-warning"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Feltz Printing Service","dealOwner":{"avatar":"/team/avatar.webp","name":"Ally Aagaard","placeholder":true},"accountName":"Themewagon","stage":{"label":"Offering","color":"#6E7891","data":80},"amount":{"totalAmount":"$142","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Feltz Printing Service
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Offering</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $142
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Flat Plate SP","dealOwner":{"avatar":"/team/avatar.webp","name":"Ally Aagaard","placeholder":true},"accountName":"Eagle Eye","stage":{"label":"Offering","color":"#6E7891","data":80},"amount":{"totalAmount":"$457","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Flat Plate SP
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Eagle Eye
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Offering</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $457
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Evacuated Tube","dealOwner":{"avatar":"/team/avatar.webp","name":"Ally Aagaard"},"accountName":"Hunter Leader","stage":{"label":"Action","color":"#E5780B","data":100},"amount":{"totalAmount":"$120","icon":"trending-down","color":"text-warning"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Evacuated Tube
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Hunter Leader
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Action</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $120
                      <span
                        className="ms-2 text-warning"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Product Delivery","dealOwner":{"avatar":"/team/35.webp","name":"Alex Abadi"},"accountName":"Themewagon","stage":{"label":"Analysis","color":"#3874FF","data":100},"amount":{"totalAmount":"$150","icon":"trending-down","color":"text-danger"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Product Delivery
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/35.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Alex Abadi
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Analysis</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $150
                      <span
                        className="ms-2 text-danger"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Product Order","dealOwner":{"avatar":"/team/18.webp","name":"Hunter Leader"},"accountName":"Themewagon","stage":{"label":"Negotiation","color":"#25B003","data":100},"amount":{"totalAmount":"$140","icon":"trending-down","color":"text-warning"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Product Order
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/18.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Hunter Leader
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Negotiation</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $140
                      <span
                        className="ms-2 text-warning"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Feltz Printing Service","dealOwner":{"avatar":"/team/avatar.webp","name":"Ally Aagaard","placeholder":true},"accountName":"Themewagon","stage":{"label":"Offering","color":"#6E7891","data":80},"amount":{"totalAmount":"$122","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Feltz Printing Service
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Offering</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $122
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Flat Plate SP","dealOwner":{"avatar":"/team/avatar.webp","name":"Ally Aagaard","placeholder":true},"accountName":"Eagle Eye","stage":{"label":"Offering","color":"#6E7891","data":80},"amount":{"totalAmount":"$321","icon":"trending-up","color":"text-success"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Flat Plate SP
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Eagle Eye
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <h6 className="mb-0 text-body">Offering</h6>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $321
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-up"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Evacuated Tube","dealOwner":{"avatar":"/team/avatar.webp","name":"Ally Aagaard"},"accountName":"Hunter Leader","stage":{"label":"Action","color":"#E5780B","data":100},"amount":{"totalAmount":"$104","icon":"trending-down","color":"text-warning"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Evacuated Tube
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/avatar.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Ally Aagaard
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Hunter Leader
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Action</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $104
                      <span
                        className="ms-2 text-warning"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle py-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"dealsName":"Product Delivery","dealOwner":{"avatar":"/team/35.webp","name":"Alex Abadi"},"accountName":"Themewagon","stage":{"label":"Analysis","color":"#3874FF","data":100},"amount":{"totalAmount":"$124","icon":"trending-down","color":"text-danger"}}'
                        />
                      </div>
                    </td>
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                        Product Delivery
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-m me-3">
                          <img
                            className="rounded-circle"
                            src="../../assets/img/team/35.webp"
                            alt=""
                          />
                        </div>
                        <a
                          className="text-body-highlight fw-bold stretched-link"
                          href="#!"
                        >
                          Alex Abadi
                        </a>
                      </div>
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      Themewagon
                    </td>
                    <td className="stage align-middle white-space-nowrap fw-bold text-body py-0">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 text-body">Analysis</h6>
                      </div>
                    </td>
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      $124
                      <span
                        className="ms-2 text-danger"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      />
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
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
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between pe-0 fs-9">
              <div className="col-auto d-flex">
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
  </div>

</div>  )
}

export default ReportDetail
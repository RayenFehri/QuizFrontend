import React, { useEffect, useState } from 'react';
import MyEChartsComponent from '../../Design/echarts';
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { Reports } from '../../../Types/Reports';
import { useParams } from 'react-router-dom';

function ReportDetail() {

  const [reports, setReports] = useState<Reports[]>([]);
  const [filteredReports, setFilteredReports] = useState<Reports[]>([]);
  const { id } = useParams();

  console.log("quizid:",id)
  useEffect(() => {
      fetchReports();
  }, [id]);

  const fetchReports = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/group_report/getOneGroupReport/${id}`);
          const reportsData: Reports[] = response.data.map((item: any) => ({
              idreport: item.idreport,
              quizid: item.quizid,
              userid: item.userid,
              totalscore: item.totalscore,
              startingdate: item.startingdate,
              endingdate: item.endingdate,
              note: item.note,
              email: item.email,
              statut: item.statut,
          }));
          // Récupérer les noms des quiz pour chaque rapport
          const updatedReports = await fetchQuizNames(reportsData);
          setReports(updatedReports);
          setFilteredReports(reportsData);
      } catch (error) {
          console.error('Error fetching reports:', error);
      }
  };

  const fetchQuizNames = async (reportsData: Reports[]): Promise<Reports[]> => {
      try {
          const quizNames: { [key: string]: string } = {};
          await Promise.all(
              reportsData.map(async (report) => {
                  if (report.quizid) { // Vérifiez si l'ID du quiz n'est pas null
                      if (!quizNames[report.quizid]) {
                          const response = await axios.get(`http://localhost:3000/quiz/findoneQuiz/${report.quizid}`);
                          quizNames[report.quizid] = response.data.quiz.quiztitle; // Supposons que le nom du quiz soit stocké dans la clé "quizname"
                      }
                  }
              })
          );
          // Mettre à jour les rapports avec les noms des quiz
          const updatedReports = reportsData.map((report) => ({
              ...report,
              quizName: quizNames[report.quizid],
          }));
          return updatedReports;
      } catch (error) {
          console.error('Error fetching quiz names:', error);
          return reportsData; // En cas d'erreur, renvoyer les rapports non modifiés
      }
  };
  return (
<div className="content">
  
  <div className="pb-9">
    <h2 className="mb-4">{reports.length > 0 ? reports[0].quizName : "Quiz Name"}</h2> {/* Remplacez "Quiz Name" par le nom de votre quiz */}
    <div className="row g-3 justify-content-between mb-4">
      <div className="col-auto">
        <div className="d-flex flex-wrap gap-2">

      
         
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
          >
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 leads-table">
                <thead>
                  <tr>
                    
                    <th
                      className="sort align-middle ps-0 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="deals_name"
                      style={{ minWidth: 120 }}
                    >
                      Email
                    </th>
                  
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="account_name"
                      style={{ minWidth: 250 }}
                    >
                      Sending Date
                    </th>
                    
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="stage"
                      style={{ minWidth: 160 }}
                    >
                      Note/TotalScore
                    </th>
                    <th
                      className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap"
                      scope="col"
                      data-sort="amount"
                      style={{ minWidth: 50 }}
                    >
                      Statut
                    </th>
                    <th
                      className="sort text-end align-middle pe-0 ps-4"
                      scope="col"
                    />
                  </tr>
                </thead>
                <tbody className="list" id="purchasers-sellers-body">
                {filteredReports.map((report, index) =>
                  <tr key={report.quizid} className="hover-actions-trigger btn-reveal-trigger position-static">
                
                    <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                      <a className="fw-bold text-primary" href="#!">
                      {report.email}
                      </a>
                    </td>
                    <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                      
                          {report.endingdate}
                       
                    </td>
                    <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
                      {report.note}/{report.totalscore}
                    </td>
                
                    <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
                      {report.statut}
                      <span
                        className="ms-2 text-success"
                        data-feather="trending-down"
                        style={{ minHeight: 8, width: 14 }}
                      >
  </span>
                    </td>
               
                  </tr>
           
               )}
                </tbody>
              </table>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </div>

</div>  )
}

export default ReportDetail;

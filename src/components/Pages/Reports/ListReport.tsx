import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Reports } from '../../../Types/Reports';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ListReport() {
    const [reports, setReports] = useState<Reports[]>([]);
    const [filteredReports, setFilteredReports] = useState<Reports[][]>([]);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const response = await axios.get('http://localhost:3000/group_report/getAllGroupReport');
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
            setFilteredReports(chunkArray(updatedReports, 2));
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const filter = reports.filter((cat) => cat.email?.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredReports(chunkArray(filter, 2));
    }

    // Fonction utilitaire pour diviser un tableau en tableau de tableaux de taille spécifiée
    const chunkArray = <T extends any>(array: T[], size: number): T[][] => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
            array.slice(i * size, i * size + size)
        );
    };

    return (
        <div className="content">

            <div className="pb-8">
                <h2 className="mb-4">Reports</h2>
                <p>All({reports.length})</p>
                <div
                    id="reports"
                    data-list='{"valueNames":["title","text","priority","reportsby","reports","date"],"page":10,"pagination":true}'
                >
                    <div className="row g-3 justify-content-between mb-2">
                        <div className="col-12">
                            <div className="d-md-flex justify-content-between">
                                <div className="mb-3">
                                  
                             
                                </div>
                            </div>
                        </div>
                    </div>
                    {filteredReports.map((reportRow, rowIndex) => (
                        <div key={rowIndex} className="row g-3 list" id="reportsList">
                            {reportRow.map((report) => (
                                <div key={report.idreport} className="col-12 col-xl-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="border-bottom border-translucent">
                                                <div className="d-flex align-items-start mb-1">

                                                    <div className="d-flex align-items-start mb-1">

                                                        <div className="d-sm-flex align-items-center ps-2">
                                                            <a
                                                                className="fw-bold fs-7 lh-sm title line-clamp-1 me-sm-4"
                                                                href="/reportDetail"
                                                            >
                                                                {report.quizName}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row g-1 g-sm-3 mt-2 lh-1">
                                                <div className="col-12 col-sm-auto flex-1 text-truncate">
                                                    <a className="fw-semibold fs-9" href="#!">

                                                        <FontAwesomeIcon className='fa-regular fa-folder me-2 reportsby' icon={faBook} />



                                                        <Link to={`/reportDetail/${report.quizid}`} className="me-2">
                                                            Consult report
                                                        </Link>

                                                    </a>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="me-2"
                                                            data-feather="grid"
                                                            style={{ strokeWidth: 2 }}
                                                        />
                                                        <p className="mb-0 fs-9 fw-semibold text-body-tertiary reports">

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="me-2"
                                                            data-feather="clock"
                                                            style={{ strokeWidth: 2 }}
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListReport;

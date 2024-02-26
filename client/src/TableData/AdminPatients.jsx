import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import Modal from './Modal';
import "./Modal.css";
function TableDisplay() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openDetails, setOpenDetails] = useState(false)   
    const [modal, setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal);
    };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  } 
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:9000');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                setPatients(json);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    

    const filteredPatients = patients.filter(patient =>
        patient && patient.patientId && patient.patientId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayData = filteredPatients.map(patient => (
        <tr key={patient._id}>
            <td>{patient.patientId}</td>
            <td>{patient.age}</td>
            <td>{patient.sex}</td>
            <td>{patient.zipCode}</td>
            <td>{patient.bmi}</td>
            <td>{patient.examId}</td>
            <td>{patient.keyFindings}</td>
            <td>{patient.brixiaScores}</td>
            <td>
                <img src={patient.imageURL} alt="Patient's X-ray" style={{ width: '100px' }} />
            </td>
            <td>
                <div className="buttonContainer">
                    <Link to={`/admin/${patient._id}`}> <button className='update'>  Update </button> </Link>
                    <Link to={`/delete/${patient._id}` }> <button className='delete'> Delete</button> </Link>
                    
                </div>
            </td>
        </tr>
    ));

    return (
        <div className="table-container">
            <input
                type="text"
                placeholder="Search by patient ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <table className="cool-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Zip Code</th>
                        <th>BMI</th>
                        <th>Exam ID</th>
                        <th>Key Findings</th>
                        <th>Brixia Scores</th>
                        <th>X-ray Scan</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData}
                </tbody>
            </table>
        </div>
    );
}

export default TableDisplay;



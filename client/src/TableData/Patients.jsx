 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import {response} from "../hooks/use-api"

function TableDisplay() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



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

 //MongoDB patient ID has to be ObjectID in order to search by it
    const displayData = filteredPatients.map(patient => (
        <tr key={patient._id}>
            
            <td><Link to ={`/patientdetails/${patient._id}`}> {patient.patientId} </Link></td>
            
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
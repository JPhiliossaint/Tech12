import React, { useEffect, useState } from 'react';
import './PatientDetails.css'; // Import CSS file for styling

const PatientDetails = ({ patientId }) => {
    const [patientData, setPatientData] = useState(null);

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const response = await fetch(`/api/patients/${patientId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch patient data');
                }
                const data = await response.json();
                setPatientData(data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        fetchPatientData();
    }, [patientId]);

    return (
        <div className="patient-info">
            <h2>Patient Information</h2>
            {patientData ? (
                <div className="info">
                    <p><strong>ID:</strong> {patientData.patientId}</p>
                    <p><strong>Age:</strong> {patientData.age}</p>
                    <p><strong>Sex:</strong> {patientData.sex}</p>
                    <p><strong>Zip Code:</strong> {patientData.zipCode}</p>
                    <p><strong>BMI:</strong> {patientData.bmi}</p>
                    <p><strong>Exam ID:</strong> {patientData.examId}</p>
                    <p><strong>Key Findings:</strong> {patientData.keyFindings}</p>
                    <p><strong>Brixia Scores:</strong> {patientData.brixiaScores}</p>
                    <img src={patientData.imageURL} alt="Patient Exam" className="xray-image" />
                </div>
            ) : (
                <p>Loading patient data...</p>
            )}
        </div>
    );
}

export default PatientDetails;


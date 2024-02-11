
import React, { useEffect, useState } from 'react';
import './ViewPatient.css'; // Import CSS file for styling

const ViewPatient = ({ patientId }) => {
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
                    <p><strong>ID:</strong> {patientData._id}</p>
                    <p><strong>Name:</strong> {patientData.name}</p>
                    <p><strong>Age:</strong> {patientData.age}</p>
                    <p><strong>Date:</strong> {patientData.enrollmentDate}</p>
                    <p><strong>Treatments:</strong> {patientData.treatments}</p>
                    <img src={patientData.img} alt="Patient Exam" />
                </div>
            ) : (
                <p>Loading patient data...</p>
            )}
        </div>
    );
}

export default ViewPatient;

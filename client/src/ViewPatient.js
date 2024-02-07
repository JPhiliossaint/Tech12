import React from 'react';
import patientSchema from './Patient'

const PatientInfo = () => {
    const patient_info = patientSchema();
  
    return (
      <div className="patient-info">
        <h2>Patient Information</h2>
        <div className="info">
          <p><strong>_id:</strong> {patient_info._id}</p>
          <p><strong>Name:</strong> {patient_info.name}</p>
          <p><strong>Age:</strong> {patient_info.age}</p>
          
          <p><strong>Date:</strong> {patient_info.date}</p>
          <p><strong>Treatments:</strong> {patient_info.treatments}</p>
          <img src={patient_info.img} alt="Patient Exam" />
        </div>
      </div>
    );
  }
  
  export default PatientInfo;

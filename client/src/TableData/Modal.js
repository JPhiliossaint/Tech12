import React, { useState } from "react";
import {Link, useNavigate, useParams } from 'react-router-dom';
import "./Modal.css";

export default function Modal() {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState(true);
  const{id} = useParams();
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleDelete = async (patientId) => {
    try {
        const response = await fetch(`http://localhost:9000/delete/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete patient');
        }
        // Filter out the deleted patient from the state
        setPatients(patients.filter(patient => patient._id !== patientId));
    } catch (error) {
        console.error('Error deleting patient:', error);
    }
    
};
  return (
    <>
      {modal && (
        <div className="modal" data-bs-backdrop='static' data-keyboard='false'>
          <div  className="overlay"></div>
          <div className="modal-content">
            <h2>Do you want to continue deleting this patient?</h2>
            <p>
              <Link to={`/admin`}><button className="deleteYes" onClick={handleDelete}> Yes </button> </Link>
              <Link to={`/admin`}><button className="deleteYes" > No </button> </Link>
            </p>
            
          </div>
        </div>
      )}
      
    </>
  );
}
import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
    const [patientData, setPatientData] = useState(null);
    var [patientId, setPatientId] = useState('');
    var [age, setAge] = useState('');
    var [sex, setSex] = useState('');
    var [zipCode, setZipCode] = useState('');
    var [bmi, setBmi] = useState('');
    var [examId, setExamId] = useState('');
    var [keyFindings, setKeyFindings] = useState('');
    var [brixiaScores, setBrixiaScores] = useState(''); 
    var [imageURL, setXRayScan] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const{id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:9000/patientDetails/${id}`)
        .then((response) => {
            setPatientId(response.data.patientId)
            setAge(response.data.age)
            setSex(response.data.sex)
            setZipCode(response.data.zipCode)
            setBmi(response.data.bmi)
            setExamId(response.data.examId)
            setKeyFindings(response.data.keyFindings)
            setBrixiaScores(response.data.brixiaScores)
            setXRayScan(response.data.imageURL)
        })
    
    }, []) 
    const handleUpdate = (e) => {
        e.preventDefault();
        const data = {
            patientId, 
            age, 
            sex, 
            zipCode, 
            bmi, 
            examId, 
            keyFindings, 
            brixiaScores, 
            imageURL,
        }
        axios.put(`http://localhost:9000/admin/${id}`,data)
        .then(() =>{
            
            navigate('/')
        })
        
    }


    return (
        <form className='update' onSubmit={handleUpdate}>
            <h3>Update Patient Form</h3>

            <label>Name</label>
            <input
                type='text' onChange={(e) => setPatientId(e.target.value)}
                value={patientId}
            />

            <label>Age</label>
            <input
                type='number' onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <label>Sex</label>
            <input
                type='text' onChange={(e) => setSex(e.target.value)}
                value={sex}
            />

            <label>Zipcode</label>
            <input
                type='text' onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
            />

            <label>BMI</label>
            <input
                type='number' onChange={(e) => setBmi(e.target.value)}
                value={bmi}
            />

            <label>Exam ID</label>
            <input
                type='text' onChange={(e) => setExamId(e.target.value)}
                value={examId}
            />

            <label>Key Findings</label>
            <input
                type='text' onChange={(e) => setKeyFindings(e.target.value)}
                value={keyFindings}
            />

            <label>Brixia Scores</label>
            <input
                type='text' onChange={(e) => setBrixiaScores(e.target.value)}
                value={brixiaScores}
            />

            <label>X-Ray Scan</label>
            <input
                type='text' onChange={(e) => setXRayScan(e.target.value)}
                value={imageURL}
            />

            <button >Update Patient</button> 
            {error && <div className='error'>{error}</div>}


        </form>
    )

}
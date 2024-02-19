import { useState } from 'react'
export default function Exams() {
    const [patientId, setPatientId] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [bmi, setBmi] = useState('');
    const [examId, setExamId] = useState('');
    const [keyFindings, setKeyFindings] = useState('');
    const [brixiaScores, setBrixiaScores] = useState('');
    const [imageURL, setXRayScan] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const patient = { patientId, age, sex, zipCode, bmi, examId, keyFindings, brixiaScores, imageURL }
        const response = await fetch('/api/patients', {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)

        }
        if (response.ok) {
            setPatientId('')
            setAge('')
            setSex('')
            setZipCode('')
            setBmi('')
            setExamId('')
            setKeyFindings('')
            setBrixiaScores('')
            setXRayScan('')
            setError(null)
            console.log('Patient Added', json)
        }
    }


    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>New Patient Form</h3>

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

            <button>Add Patient</button>
            {error && <div className='error'>{error}</div>}


        </form>
    )

}
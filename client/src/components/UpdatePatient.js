import { useState, useEffect } from "react";

const UpdatedPatient = () => {
    const [patientID, setPatientID] = useState('');
    const [examID, setExamID] = useState('');
    const [image, setImage] = useState(null);
    const [keyfindings, setKeyfindings] = useState('');
    const [brixiascore, setBrixiascore] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [bmi, setBmi] = useState('');
    const [zipcode, setZipcode] = useState('');
}

return (
    <form className="update" onSubmit={handleSubmit}>
        <h3>Update Patient Record</h3>
        {/* Render input fields for updating patient data */}
        <label>Patient ID</label>
        <input
            type="text"
            onChange={(e) => setPatientID(e.target.value)}
            value={patientID}
        />

        <label>Exam ID</label>
        <input
            type="text"
            onChange={(e) => setExamID(e.target.value)}
            value={examID}
        />

        <label>Image</label>
        <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            value={image}
        />

        <label>keyfindings</label>
        <input
            type="text"
            onChange={(e) => setKeyfindings(e.target.value)}
            value={keyfindings}
        />

        <label>Brixia Score</label>
        <input
            type="number"
            onChange={(e) => setBrixiascore(e.target.value)}
            value={brixiascore}

        />

        <label>Age</label>
        <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
        />

        <label>Sex</label>
        <input
            type="text"
            onChange={(e) => setSex(e.target.value)}
            value={sex}
        />

        <label>BMI</label>
        <input
            type="number"
            onChange={(e) => setBmi(e.target.value)}
            value={bmi}
        />

        <label>Zip Code</label>
        <input
            type="number"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
        />
        <button type="submit">Update</button>
    </form>
);

export default UpdatedPatient;
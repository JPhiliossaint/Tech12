// import { useState } from "react"

const PatientForm = () => {
    const [patientID, setPatientID] = useState('')
    const [examID, setExamID] = useState('')
    const [image, setImage] = useState('')
    const [keyfindings, setKeyfindings] = useState('')
    const [brixiascore, setBrixiascore] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [bmi, setBmi] = useState('')
    const [zipcode, setZipcode] = useState('')
    // const [error, setError] = useState(null)

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const patient = { patientID, examID, image, keyfindings, brixiascore, age, sex, bmi, zipcode, error }


    // }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Patient</h3>

            {/* <label>Patient ID</label>
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
                value={zipcode} */}
            {/* /> */}

            <button type="submit">Add Patient</button>

        </form>
    )
}

export default PatientForm
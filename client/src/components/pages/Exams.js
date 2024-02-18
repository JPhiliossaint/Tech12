export default function Exams() {
    // return <h1>Exams</h1>

    return (
        <form className="create">
            <h3>Add a New Patient</h3>

            <label htmlFor="patientID">Patient ID:</label>
            <input type="text" id="patientID" name="patientID" />

            <label htmlFor="examID">Exam ID:</label>
            <input type="text" id="examID" name="examID" />

            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image" />

            <label htmlFor="keyFindings">Key Findings:</label>
            <textarea id="keyFindings" name="keyFindings"></textarea>

            <label htmlFor="brixiaScore">Brixia Score:</label>
            <input type="number" id="brixiaScore" name="brixiaScore" />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" />

            <label htmlFor="sex">Sex:</label>
            <select id="sex" name="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="bmi">BMI:</label>
            <input type="number" id="bmi" name="bmi" />

            <label htmlFor="zipCode">Zip Code:</label>
            <input type="text" id="zipCode" name="zipCode" />


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
                value={zipcode}
            /> */}

            <button type="submit">Add Patient</button>

        </form>
    )

}
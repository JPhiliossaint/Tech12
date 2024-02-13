import { useState } from "react"

const PatientForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const patient = { name, age, gender, birthDate }

        //Check for fetched data. Will come back later
        const response = await fetch('/api/patient/', {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: { 'Content-Type': 'application/json' },


        })


        const json = await response.json()

        if (!response.success) {
            setError(json.error)
        }

        if (response.success) {
            setName('')
            setAge('')
            setGender('')
            setBirthDate('')
            setError(null)
            console.log('new patient added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Patient</h3>

            <label>Name</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={title}
            />

            <label>Age</label>
            <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <label>Gender</label>
            <input
                type="text"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
            />

            <label>Birthdate</label>
            <input
                type="number"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
            />

            <button>Add Patient</button>

        </form>
    )
}

export default PatientForm
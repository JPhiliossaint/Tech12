import { useState } from "react"

const PatientForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const patient = { name, age, gender, birthDate }

}
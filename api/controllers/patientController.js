const { request } = require('../app');
const Patient = require('../models/patientschema');
const mongoose = require('mongoose');
const uri = "mongodb+srv://MernJames:uf4Oycnf4imSAoYB@mern.ylprxvy.mongodb.net/?retryWrites=true&w=majority"



async function connect(){
    try {
        await mongoose.connect(uri)
      
        console.log('connected to mongoose')
    } catch(error){
        console.error(error);
    }
}

connect()

// get all patients
const getPatients = async (req, res) => {
    const patients = await Patient.find({}).sort({ createdAt: -1 })
    res.status(200).json(patients)
}
//get single patient
const getPatient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'patient does not exist' })
    }

    const patient = await Patient.findById(id)

    if (!patient) {
        return res.status(404).json({ error: 'patient does not exist' })
    }

    res.status(200).json(patient)
}

// create patient
const createPatient = async (req, res) => {
    const { patientId, age, sex, zipCode, bmi, __v, examId, keyFindings, brixiaScores, imageURL } = req.body

    // add doc to db
    try {
        const patient = await Patient.create({ patientId, age, sex, zipCode, bmi, __v, examId, keyFindings, brixiaScores, imageURL })
        res.status(200).json(patient)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete patient
const deletePatient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'patient does not exist' })
    }

    const patient = await Patient.findByIdAndDelete(id)

    if (!patient) {
        return res.status(404).json({ error: 'patient does not exist' })
    }

    res.status(200).send({message: "Patient delete was successful"})


}

// update patient
const updatePatient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'patient does not exist' })
    }

    const patient = await Patient.findByIdAndUpdate(id, req.body)

    if (!patient) {
        return res.status(404).json({ error: 'patient does not exist' })
    }

    res.status(200).json(patient)
}

module.exports = { createPatient, getPatients, getPatient, deletePatient, updatePatient }
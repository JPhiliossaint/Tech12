const Patient = require('../models/patientModel')
const mongoose = require('mongoose')
//get all patients
// the minus 1 after createdAT lists items in descending order
const  getPatients = async (req, res) => {
    const patients = await Patient.find({}).sort({createdAt: -1})

    res.status(200).json(patients)
}


//get a single patient
const getPatient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such patient'})
    }
    const patient = await Patient.findById(id)

    if(!patient) {
        return res.status(404).json({error: 'no such patient'})
    }
    res.status(200).json(patient)
}

//create new patient
const createPatient = async (req, res) => {
    const{name, age, img,} = req.body

// adds doc to db
    try {
        const patient = await Patient.create({name, age, img})
        res.status(200).json(patient)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete a patient

const deletePatient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such patient'})
    }
    const patient = await Patient.findOneAndDelete({_id: id})

    if(!patient) {
        return res.status(400).json({error: 'no such patient'})
    }
    res.status(200).json(patient)
}

// update a Patient

const updatePatient = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such patient'})
    }

    const patient = await Patient.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!patient) {
        return res.status(400).json({error: 'no such patient'})
    }
    res.status(200).json(patient)
}

module.exports = {
    createPatient,
    getPatients,
    getPatient,
    deletePatient,
    updatePatient
}
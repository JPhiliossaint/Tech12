const express = require('express')

const {createPatient,
    getPatient,
    getPatients, 
    deletePatient,
    updatePatient
} = require('../controllers/patientController')

const router = express.Router()

// this is to get all patients
router.get('/', getPatients)

// this is to get a singular patient
router.get('/:id', getPatient)

// This POST a new patient
router.post('/', createPatient)

// THis DELETES a patient
router.delete('/:id', deletePatient)


//This UPDATES a patient
router.patch('/:id', updatePatient)

module.exports = router
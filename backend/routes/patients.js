const express = require('express');
const { createPatient, getPatients, getPatient, deletePatient, updatePatient } = require('../controllers/patientController');
const router = express.Router()
// GET ALL PATIENTS
router.get('/', getPatients)

// GET SINGLE PATIENT
router.get('/:id', getPatient)

// POST NEW PATIENT
router.post('/', createPatient)

// DELETE PATIENT
router.delete('/:id', deletePatient)

// UPDATE PATIENT
router.patch('/:id', updatePatient)

module.exports = router
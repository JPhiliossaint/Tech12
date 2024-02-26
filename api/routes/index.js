var express = require('express');
var router = express.Router();
const { createPatient, getPatients, getPatient, deletePatient, updatePatient } = require('../controllers/patientController');
/* GET home page. */

// GET ALL PATIENTS
router.get('/', getPatients)

//router.get('/admin', getPatients)

// GET SINGLE PATIENT
router.get('/patientdetails/:id', getPatient)

// POST NEW PATIENT
router.post('/', createPatient)

// DELETE PATIENT
router.delete('/delete/:id', deletePatient)

// UPDATE PATIENT
router.put('/admin/:id', updatePatient)

module.exports = router
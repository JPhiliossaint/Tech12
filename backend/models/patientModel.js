const mongoose = require('mongoose');

const Schema = mongoose.Schema

const patientSchema = new Schema({
    patientId: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    __v: {
        type: Number,
        required: false
    },
    examId: {
        type: String,
        required: true
    },
    keyFindings: {
        type: String,
        required: true
    },
    brixiaScores: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Patient', patientSchema)
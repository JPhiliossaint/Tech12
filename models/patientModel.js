const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId, 
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    enrollmentDate: {
        type: Date,
        default: () => Date.now()
    },
    treatments: String
    // array for visit date
    // array for treatments happening on the date

}, {timestamps: true}
)

module.exports = mongoose.model('Patient', patientSchema)


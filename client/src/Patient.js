const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    _id: String,
    name: String,
    age: Number,
    img: String,
    enrollmentDate: {
        type: Date,
        default: () => Date.now()
    },
    visitDates: [Date],
    treatments: String
    // array for visit date
    // array for treatments happening on the date

})

module.exports = mongoose.model("Patient", patientSchema)
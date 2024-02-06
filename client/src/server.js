const express = require("express")
const mongoose = require("mongoose")
const Patient = require("./Patient") // patient schema 
const searcher = require("./search")
const fs = require('fs'); // file system
//const image = require('image')
const multer = require('multer'); // middleware for uploading files
const path = require('path');
var idCounter = 0
const { error } = require("console");
const app = express();

const uri = "mongodb+srv://tech12:Tech12project@cluster0.hy8zy3s.mongodb.net/?retryWrites=true&w=majority"
/*
    const uri = 'mongodb+srv://tech12:<password>@cluster0.hy8zy3s.mongodb.net/?retryWrites=true&w=majority'

*/

async function connect(){
    try {
        await mongoose.connect(uri)
        //const pat = new Patient({_id:"shirlz888", name: "James", age:3})
        //pat.save()
        
        //console.log(pat)
        //console.log(searcher)
        //pat.name = "james"
        console.log('connected to mongoose')
        finder('james')
    } catch(error){
        console.error(error);
    }
}




/*app.get('/', (req, res) => {
    res.status(200).send('<h1>HI</h1>') // sends a simple html to the front end.
}) */

var filebuff;
var bas64;
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        //converterBase64(file)
        var tempName = path.extname(file.originalname)+ '-' + Date.now()
        cb(null, tempName)
        
        setTimeout(() => { 
            var binary = fs.readFileSync("./images/"+tempName)
            bas64 = new Buffer(binary).toString("base64")
            idCounter++
            addPatient(new Patient({
                _id:"COVID-19-"+idCounter,
                name: req.body.name, 
                age: 40 , 
                img: bas64,
                treatments: req.body.desc
            })); }, 2000); 
        //console.log(bas64)
    }
});

var upload = multer({ storage: storage });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/testpage.html'));
  });


app.post("/upload", upload.single('image') ,(req,res) =>{
    setTimeout(() => { 
        var tempImage = bas64.split(';base64,').pop() // split the uncessary string from the base65 data
        var buffer = Buffer.from(tempImage,"base64") 
        fs.writeFileSync("new-image.png",buffer) // creates the image and adds it to the directory
        res.sendFile(path.join(__dirname, '/new-image.png')) // send the image on the frontend
        //finder("james")
    }, 2000)
});

connect(); 
console.log("after connection made")
app.listen(8000, () => {
    console.log("Server started on port 8000")
});

function addPatient(newPatient){
    try{
        newPatient.save();
        if (Patient.exists(newPatient._id)){
            console.log("this patient already exists")
        } else {
          newPatient.save();
            console.log(newPatient)
        }
    } catch (error){
        console.log(error)
    }
}
/* this function does not execute after the connection is made to the database*/

async function finder(keyword){
    var tempPatient = await Patient.find()
    console.log(tempPatient)
}


console.log("end of code")
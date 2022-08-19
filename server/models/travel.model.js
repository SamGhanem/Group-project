const mongoose = require('mongoose')

//Create Schema 
//Time stamps are object in schema
const TravelSchema = new mongoose.Schema({
    title: {
    type: String,
    required: [true, 'Title is required.'],
    minlength: [3, 'Must be at least 3 characters']
    },   
    place: {
    type: String,
    },
    about: {
    type: String,
    required: [true, 'About is required.'],
    minlength: [3, 'Must be at least 3 characters']
    },
    pictures: {
    type: String,
    },
},
{ timestamps: true}
);

//Define model
const Travels = mongoose.model("travels", TravelSchema);

//Export model
module.exports = Travels;
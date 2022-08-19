//Import models
const Travel = require("../models/travel.model");
//Send from Express with function

//GET/FIND ALL 
module.exports.getAllTravel = (req, res) => {
//Promise function/Route capability 
    Travel.find()
        //then success: get all travels
        .then((allTravel) => res.json(allTravel))
        //catch errors 
        .catch((err) => {
            res.status(400).json({ message: 'There is an error finding all', error: err})
});}

//CREATE NEW
module.exports.createNewTravel = (req, res) => {
    //const {name} = req.body
    console.log(req.body)
    Travel.create(req.body)
    .then(brandNewTravel => res.json(brandNewTravel))
    .catch((err) => {
        res.status(400).json({ message: 'There is an error creating a new Travel', error: err})
});}

//GET ONE/BY ID
module.exports.findOneTravel = (req, res) => {
    Travel.findOne({_id: req.params.id}) 
    .then(findOneTravel => {
        console.log(findOneTravel)
        if (!findOneTravel) {
            res.status(400).json({ message: 'Find one Travel came back as null'})
        }
        else{ res.json(findOneTravel)
        }
    })
    .catch((err) => {
        console.log("I messed up")
        res.status(400).json({ message: 'There is an error finding one', error: err})
});}

//UPDATE
module.exports.updateOneTravel = (req, res) => {
    Travel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateTravel => {
            res.json({ travel: updateTravel, message:'Travel updated successfully' })
        })
        .catch((err) => {
            res.status(400).json({ message: 'There is an error updating this Travel', error: err })
        });}

//DELETE
module.exports.deleteOneTravel = (req, res) => {
    Travel.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result})
    })
    .catch((err) => {
        res.status(400).json({ message: 'There is an error in the deleting of this Travel', error: err})
    });}
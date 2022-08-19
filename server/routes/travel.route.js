const TravelController = require("../controllers/travel.controller");

//Routes that go to controller 
module.exports = app => {
    //Get all- Get
    app.get("/api/travel", TravelController.getAllTravel);

    //Create new- Post
    app.post("/api/travel/create", TravelController.createNewTravel);

    //Get one- Get
    app.get("/api/travel/:id", TravelController.findOneTravel);

    //Update- Put
    app.put("/api/travel/:id", TravelController.updateOneTravel);

    //Delete- post
    app.delete("/api/travel/:id", TravelController.deleteOneTravel);
};
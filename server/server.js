const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(cors({origin:"http://localhost:3000"}));
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
const TravelRoutes = require("./routes/travel.route");
TravelRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`) );



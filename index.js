import express from "express";
import parseResponse from "./core/parseResponse.js";
import logger from "./core/logger.js";
import routes from "./core/routes.js";
import dbConnect from "./core/db.js";
const app = express();
const PORT =  process.env.PORT || 5000;

dbConnect();
logger(app);
parseResponse(app);
routes(app);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

//Main commit for con
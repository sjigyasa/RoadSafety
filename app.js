const express = require('express');
const bodyParser = require('body-parser');

//connection
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('./db/conn');

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router to APIs
const routes = require('./router/auth');
app.use("/api", routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
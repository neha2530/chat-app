const express = require("express");
const database = require("./database")
const app = express();
const cors = require("cors");
const authController = require("./src/auth.controller")

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(authController)
app.listen(3000, () => {
    console.log("`Server is Started.");
    database.connectDatabase();

    // connect database
});

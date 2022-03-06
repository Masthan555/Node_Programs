/* Masthan Swamy */

const express = require("express");
const Sequelize = require("sequelize");
const dbConfig = require("./config.json");

const app = express();
const port = 3000;
const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database,
    dbSettings.username,
    dbSettings.password,
    dbSettings
);


app.get("/", (req, res)=>{
    res.send("My Masthan Swamy...");
});


app.listen(port, async ()=>{
    console.log(`Server started listening on Port :${port}`);
    try{
        await sequelize.authenticate();
        console.log("Connected to the database successfully!");
    }
    catch(err){
        console.log("unable to connect to the database.");
    }
});
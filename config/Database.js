// import mongoose from "mongoose";
const mongoose = require('mongoose');


const dbcon = async () => {
    try {
        const dbUrl = process.env.MONGO_URI
        const con = await mongoose.connect(dbUrl)
        console.log("Database connected");
    } catch (error) {
        console.log("db failed");
        // console.log(error.message)
        process.exit(1)
    }
}

module.exports = dbcon;
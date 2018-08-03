"use strict";

// import mongoose
const mongoose = require("mongoose");

// reset the "promise" library
mongoose.Promise = global.Promise;

// declare connection string
let dbURI = "mongodb://localhost/"
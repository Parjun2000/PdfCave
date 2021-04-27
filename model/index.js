const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PdfCaveDataBase", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log("connection successful");
    }
    else {
        console.log("connection failed");
    }
});

const Book = require("./book.model");


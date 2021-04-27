const conn = require("./model");
const cors = require('cors');
const express = require("express");
const application = express();
application.use(cors());
const expressHandlebars = require("express-handlebars");
const path = require("path");
const bodyparser = require("body-parser");

const BooksController = require("./controllers/books");

application.use(bodyparser.urlencoded({
    extended: true
}));


// set views
application.set("views", path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "defaultLayout",
    layoutsDir: __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

// show data on web browser
// application.get("/", (req, res) => {

// });

//show data using controller
application.use("/books", BooksController);


// connection or server creation
// accepting connection on port 3000
application.listen("3000", () => {
    console.log("Server started");

});
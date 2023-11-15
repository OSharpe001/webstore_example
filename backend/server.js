const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5003;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/database");

//  IMPORT "PATH" (A CORE PACKAGE OF NODE.JS) TO HELP RENDER THE FRONTEND
const path = require("path");

const app = express();

connectDB();

// TO ALLOW THE BODY OF A POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES


// SERVE FRONTEND
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")));
} else {
    app.get("/", (req, res) => res.send("App isn't set to production..."));
};

// HANDLING ERRORS AND ASSOCIATED MESSAGES
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`The Store Example server is running on port ${PORT}`);
});
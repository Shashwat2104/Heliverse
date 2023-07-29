// Import necessary modules
const express = require("express");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/user-route");
const cors = require("cors");
require("dotenv").config();

// Create an instance of the express application
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Mount the user route on the "/users" path
app.use("/users", userRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

// Start the server and listen on the specified port
app.listen(process.env.PORT, async (req, res) => {
  try {
    // Connect to the database
    await connection;
    console.log("Database is connected");
  } catch (err) {
    console.log(err.message);
    console.log("Server is not running..");
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});

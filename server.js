// WE DO BASIC SERVER SETUP IN SERVER .JS FILE
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//dotenv
// we need to make sure that this list must be written after above three lines only it cant be written anywhere
// else or else the env var wont work in our app
dotenv.config();

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// static files access
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//port
// accessing the server by writing process
const PORT = process.env.PORT || 8080;

//listen
// by listening our application runs live
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./mongoDB/db");
const routes = require("./routes/api");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}/data`));
});

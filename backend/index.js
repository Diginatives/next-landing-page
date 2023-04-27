const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("tiny"));
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded());
const userRoutes = require("./route");
app.use("/api", userRoutes);
mongoose.set("strictQuery", false);
mongoose
  // .connect("mongodb://localhost:27017/landingPage")
   .connect(process.env.mongooDb, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
  .then(() => console.log("MongooBD is connected"))
  .catch((err) => err.message);
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`App is running at ${port} `));

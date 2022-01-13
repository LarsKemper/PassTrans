import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// ROUTES IMPORT

const app: Express = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES

// START
const CONNECTION_URL: any = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

// MONGODB
const options: object = {
  useNewUrlParser: true,
};

mongoose.Promise = global.Promise;
mongoose
  .connect(CONNECTION_URL, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

import express, { Express } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { apiRoutes } from "./shared/enums/apiRoutes.enum";
import { transferStatusJob } from "./jobs/transfer.cron";
import { transferStatusEmailJob } from "./jobs/email.cron";

// ROUTES IMPORT
import transferRoutes from "./routes/transfer.routes";
import dashboardRoutes from "./routes/dashboard.routes";

const app: Express = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// START CRONJOBS
transferStatusJob.start();
transferStatusEmailJob.start();

// ROUTERS
const API_BASE = process.env.API_BASE;
app.use(API_BASE + apiRoutes.TRANSFER, transferRoutes);
app.use(API_BASE + apiRoutes.DASHBOARD, dashboardRoutes);

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

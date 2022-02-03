import express from "express";
import {
  getDashboard,
  changeStatus,
} from "../controllers/dashboard.controller";

const router: any = express.Router();

router.route("/:accessId").get(getDashboard);
router.route("/status/:accessId").put(changeStatus);

export default router;

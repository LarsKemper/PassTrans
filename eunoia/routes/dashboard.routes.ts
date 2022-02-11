import express from "express";
import {
  changeStatus,
  requestDashboard,
  verifyRequestCode,
  getDashboard,
} from "../controllers/dashboard.controller";

const router = express.Router();

router.route("/:accessId").get(getDashboard);
router.route("/request").post(requestDashboard);
router.route("/request/verify").post(verifyRequestCode);
router.route("/status/:accessId").put(changeStatus);

export default router;

import express from "express";
import {
  createTransfer,
  getTransfer,
} from "../controllers/transfer.controller";

const router: any = express.Router();

router.route("/").post(createTransfer);
router.route("/:accessId").get(getTransfer);

export default router;

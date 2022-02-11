import express from "express";
import {
  createTransfer,
  getTransfer,
  setTransferViewed,
} from "../controllers/transfer.controller";

const router = express.Router();

router.route("/").post(createTransfer);
router.route("/:accessId").get(getTransfer);
router.route("/setViewed/:accessId").put(setTransferViewed);

export default router;

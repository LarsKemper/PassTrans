import express from "express";
import { createTransfer } from "../controllers/transfer.controller";

const router: any = express.Router();

router.route("/").post(createTransfer);

export default router;

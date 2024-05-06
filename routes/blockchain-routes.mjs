import express from "express";
import { getBlockchain, addNewBlock, blockByIndex } from "../controllers/blockchain-controller.mjs";

const router = express.Router();

router.route("/").get(getBlockchain);
router.route("/:id").get(blockByIndex);
router.route("/mine").post(addNewBlock);

export default router;
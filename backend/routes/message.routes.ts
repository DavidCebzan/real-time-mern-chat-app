import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller";
import { protectRoute } from "../middleware/protectRoute";

const router = express.Router();

router.post('/send/:id', protectRoute , sendMessage);
router.get('/:id', protectRoute ,getMessages);


export default router;
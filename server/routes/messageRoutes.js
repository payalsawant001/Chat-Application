import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getMessages,
  getUsersForSidebar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/messageController.js";  // ✅ match exact file name

const messageRouter = express.Router();

// Get all users except logged-in user (for sidebar)
messageRouter.get("/users", protectRoute, getUsersForSidebar);

// Get all messages with a specific user
messageRouter.get("/:id", protectRoute, getMessages);

// Mark a specific message as seen
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);

// Send a message to a specific user
messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;

import { Router } from "express";
import {
    moderatePost,
    flagUser,
    getPostById,
    getUserProfile,
    getFlaggedContentStats,
    moderateContent,
} from "../controllers/moderationController";

const router: Router = Router();

router.get("/post/:id", getPostById);
router.post("/post/:id/moderate", moderatePost);
router.get("/user/:id/profile", getUserProfile);
router.post("/user/:id/flag", flagUser);
router.get("/content/flags/stats", getFlaggedContentStats);
router.post("/", moderateContent);

/**
 * @swagger
 * /api/v1/moderation:
 *   post:
 *     summary: Moderate social media content
 *     description: Checks if the submitted content contains inappropriate words.
 *     tags: [Moderation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "This is a clean post!"
 *     responses:
 *       200:
 *         description: Content moderation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 approved:
 *                   type: boolean
 *       400:
 *         description: Missing content field
 */
router.post("/", moderateContent);

export default router;
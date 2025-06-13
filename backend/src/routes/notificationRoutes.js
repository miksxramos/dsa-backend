import express from 'express';
import { createNotification, getUserNotifications } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/', createNotification);
router.get('/:userId', getUserNotifications);

export default router;

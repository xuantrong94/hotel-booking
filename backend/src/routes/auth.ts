import express from 'express';
import { login, register } from '../controllers/auth';
import { authValidator } from '../utils/constant';

const router = express.Router();

//path /api/auth/
router.post('/login', authValidator, login);
router.post('/register', authValidator, register);

export default router;

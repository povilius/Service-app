import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import authMiddleware, { UserPayload } from '../middlewares/authMiddleware';

const router = express.Router();

interface LoginRequest {
  email: string;
  password: string;
}

interface JwtPayload {
  id: string;
  role: string;
}

router.post('/login', async (req, res) => {
  const { email, password }: LoginRequest = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.get('/admin', authMiddleware, (req, res) => {
  if (req.currentUser?.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  res.json({ message: 'Welcome, admin' });
});

router.get('/user', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome, user' });
});

export default router;

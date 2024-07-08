import express, { Request, Response } from 'express';
import User from '../models/User';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

// Retrieve all users
router.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    console.log('from users', (req as any).currentUser);

    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Update a user by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    return res.json(updatedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// Delete a user by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    return res.json(deletedUser);
  } catch (err) {
    return res.status(404).json(err);
  }
});

export default router;

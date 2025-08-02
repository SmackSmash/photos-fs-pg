import { Router } from 'express';
import db from '../db/connect';
import { usersTable as users } from '../db/schema';

const router = Router();

// @route   GET /users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const result = await db
      .select({
        id: users.id,
        firstName: users.firstName,
        secondName: users.secondName,
        userName: users.userName,
        email: users.email
      })
      .from(users);
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;

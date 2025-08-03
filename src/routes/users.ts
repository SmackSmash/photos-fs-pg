import { Router } from 'express';
import db from '../db/connect';
import { usersTable as users } from '../db/schema';
import { createInsertSchema } from 'drizzle-zod';
import * as z from 'zod';
import { ZodError } from 'zod';

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
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

const insertUserSchema = createInsertSchema(users);

// @route   POST /users
// @desc    Add user
// @access  Public
router.post('/', async (req, res) => {
  try {
    const parsed = insertUserSchema.parse(req.body);
    res.send('User added successfully');
  } catch (error) {
    if (error instanceof ZodError) {
      error.issues.forEach(issue => console.error(issue.message));
      res.status(400).send(z.flattenError(error));
    }
  }
});

export default router;

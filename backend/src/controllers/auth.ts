import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { validationResult } from 'express-validator';

export const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    // TODO: Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    // Generate token
    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: '1d',
      }
    );

    // Send token in HTTP-only cookie
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    return res.status(200).json({ userId: user._id, message: 'Login success' });
  } catch (error) {
    res.status(500).send({ message: 'Server error auth' });
  }
};

export const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send('User already exists');
    }
    user = new User(req.body);
    await user.save();
    // Generate token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: '1d',
      }
    );

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    return res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};

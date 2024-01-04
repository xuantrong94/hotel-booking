import { check, validationResult } from 'express-validator';

export const authValidator = [
  check('email', 'Please enter a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({
    min: 6,
  }),
];

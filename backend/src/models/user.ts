import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export type TUser = {
  _id: string;
  password: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const userSchema = new mongoose.Schema<TUser>(
  {
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: String,
    username: String,
    phone: String,
    website: String,
  },
  { timestamps: true }
);

// Hash password before saving to database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
  }
  next();
});

const User = mongoose.model<TUser>('User', userSchema);

export default User;

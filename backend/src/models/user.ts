import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export type TUserAddress = {
  street: string;
  suite: string;
  city: string;
  zipode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type TUserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  _id: string;
  password: string;
  name: string;
  username: string;
  email: string;
  address: TUserAddress;
  phone: string;
  website: string;
  company: TUserCompany;
};

const userSchema = new mongoose.Schema<TUser>(
  {
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: String,
    username: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
        lat: String,
        lng: String,
      },
    },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },
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

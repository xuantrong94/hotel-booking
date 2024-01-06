import { TRegisterFormMenu } from "./type.md";

export const REGISTER_FORM_MENU: TRegisterFormMenu[] = [
  {
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
    validate: {
      required: true,
      maxLength: 20,
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    validate: {
      required: true,
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    validate: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Enter your confirm password",
    validate: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    validate: {
      required: true,
      maxLength: 20,
    },
  },

  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone",
    validate: {
      pattern: /^[0-9]{10}$/,
    },
  },
  {
    name: "website",
    label: "Website",
    placeholder: "Enter your website",
    validate: {
      pattern: /^(http|https):\/\/[^ "]+$/,
    },
  },
];

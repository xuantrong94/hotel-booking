export type TRegisterFields =
  | "name"
  | "username"
  | "email"
  | "phone"
  | "website"
  | "password"
  | "confirmPassword";

export type TRegisterFormMenu = {
  name: TRegisterFields;
  label: string;
  placeholder: string;
  validate: Record<string, unknown>;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};
export type TRegisterFormData = {
  password: string;
  confirmPassword: string;
  name?: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
};

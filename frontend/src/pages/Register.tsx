import { useForm } from "react-hook-form";
import type { TRegisterFormData } from "../utils/type.md";
import { REGISTER_FORM_MENU } from "../utils/constant";
import React from "react";
import InputRegister from "../components/ui/input/InputRegister";
import MainButton from "../components/ui/button/MainButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authApi from "../api/client";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const registerSchema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(5, "Username must be at least 5 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Confirm Password must match"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: TRegisterFormData) => {
    const newUser = { ...data, confirmPassword };
    const res = await authApi.register(data);
    if (res.status === 201) {
      toast("Register success");
    }
  };

  return (
    <form
      className="mx-auto flex max-w-4xl flex-col gap-5 rounded-md border p-5 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-5 text-2xl font-bold">Create an Account</h2>
      <div className="grid grid-cols-12 gap-5 [&_div]:col-span-12 md:[&_div]:col-span-6 xl:[&_div]:col-span-4">
        {REGISTER_FORM_MENU.map((input) => (
          <React.Fragment key={input.name}>
            <InputRegister
              {...input}
              control={control}
              errors={errors}
            />
          </React.Fragment>
        ))}
      </div>
      <MainButton
        label="Register"
        buttonFunction={{
          type: "submit",
        }}
      />
      <ToastContainer />
    </form>
  );
};

export default Register;

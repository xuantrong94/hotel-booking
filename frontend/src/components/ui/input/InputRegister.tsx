import { Control, Controller } from "react-hook-form";
import { TRegisterFields, TRegisterFormData } from "../../../utils/type.md";

type Props = {
  name: TRegisterFields;
  label: string;
  placeholder: string;
  validate: Record<string, unknown>;
  control: Control<TRegisterFormData>;
  errors: Record<string, unknown>;
};

const InputRegister = ({
  name,
  label,
  placeholder,
  validate,
  control,
  errors,
}: Props) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-gray-700"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={validate}
        render={({ field }) => (
          <input
            type="text"
            className="w-full rounded border px-2 py-1 font-normal"
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      <p className="text-red-300">
        {(errors[name] as { message?: string })?.message}
      </p>
    </div>
  );
};

export default InputRegister;

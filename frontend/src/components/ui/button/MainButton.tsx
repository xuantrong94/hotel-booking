import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { blankFunction } from "../../../utils";

type LinkButtonProps = {
  url: string;
};

type FeatureButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { disable?: boolean };

type ButtonProps = {
  label: string;
  extraClassName?: string;
  buttonFunction: LinkButtonProps | FeatureButtonProps;
};

const MainButton: React.FC<ButtonProps> = ({
  label,
  extraClassName,
  buttonFunction,
}) => {
  const defaultClassName =
    "font-semibold uppercase text-white-main bg-blue-800 rounded px-4 py-2 hover:bg-blue-500 transition duration-250";

  if ("url" in buttonFunction) {
    const { url } = buttonFunction as LinkButtonProps;
    return (
      <Link
        to={url}
        className={twMerge(defaultClassName, extraClassName)}
      >
        {label}
      </Link>
    );
  }

  const {
    onClick = blankFunction,
    disable,
    type,
  } = buttonFunction as FeatureButtonProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={"disabled" in buttonFunction ? disable : false}
      className={twMerge(defaultClassName, extraClassName)}
    >
      {label}
    </button>
  );
};

export default MainButton;

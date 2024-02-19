import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-sm" };
const variants = {
  fill: {
    gray_900_02: "bg-gray-900_02 text-white-A700",
    gray_100: "bg-gray-100 text-gray-900_4c",
  },
  outline: {
    black_900:
      "bg-gradient  border border-black-900 border-solid shadow-bs text-gray-900_01",
  },
};
const sizes = { xs: "p-px", sm: "p-[5px]", md: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_900_02", "gray_100", "black_900"]),
};

export { Button };

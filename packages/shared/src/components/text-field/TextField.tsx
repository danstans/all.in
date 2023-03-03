import React, { forwardRef } from "react";
import { textFieldStyles } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

const TextField = forwardRef(
  (
    { type = "text", onChange, onBlur }: TextFieldProps,
    forwardedRef,
  ): JSX.Element => {
    return (
      <div className="relative">
        <input
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          id="floating_outlined"
          className="block px-2.5 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary-600 peer"
          placeholder=" "
          ref={forwardedRef}
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
        >
          Floating outlined
        </label>
      </div>
    );
  },
);

const FormTextField = (
  props: Omit<TextFieldProps, "onChange" | "onBlur">,
): JSX.Element => {
  const { register } = useFormContext();
  const { onChange, onBlur, name, ref } = register(props.name);

  return (
    <TextField
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      ref={ref}
      {...props}
    />
  );
};

export { TextField, FormTextField };

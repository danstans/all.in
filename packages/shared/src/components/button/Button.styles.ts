import { VariantProps, cva } from "cva";

export const buttonStyles = cva(
  "group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 focus:ring-4 font-normal ",
  {
    variants: {
      color: {
        primary: "focus:ring-primary-300",
        secondary: "focus:ring-secondary-300",
        warning: "bg-yellow-500", // Yellow ? mostly
        danger: "bg-red-500", // Red mostly
        // text: "text-gray-900 bg-white  focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
        default: "", // Black
      },
      style: {
        filled: "text-white border border-transparent",
        light: "",
        outline: "",
        text: "text-primary-700",
      },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-2.5",
        xl: "text-base px-6 py-3",
      },
      fullWidth: {
        true: "w-full",
      },
      pill: {
        true: "rounded-full",
        false: "rounded-lg",
      },
      position: {
        left: "rounded-l-lg rounded-r-none",
        center: "rounded-none",
        right: "rounded-r-lg rounded-l-none border-l",
        default: "rounded-lg",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        style: "filled",
        class: "bg-primary-700 text-white",
      },
      {
        color: "primary",
        style: "light",
        class:
          "bg-primary-200 text-primary-700 filter saturate-100 brightness-95 contrast-125",
      },
      {
        color: "primary",
        style: "outline",
        class:
          "text-primary-700 border border border-primary-700 border-opacity-10",
      },
      {
        color: "secondary",
        style: "filled",
        class:
          "bg-secondary-500 text-white filter saturate-150 brightness-90 contrast-150",
      },
      {
        color: ["primary", "secondary"],
        position: "center",
        class:
          "border-l border-r-transparent border-t-transparent border-b-transparent border-gray-400",
      },
      {
        color: ["primary", "secondary"],
        position: "right",
        class:
          "border-t-transparent border-r-transparent border-b-transparent border-gray-400",
      },
      {
        style: "text",
        position: "center",
        class: "border-l border-r-transparent",
      },
      {
        style: "text",
        position: "left",
        class: "border-r-transparent",
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "md",
      fullWidth: false,
      pill: false,
    },
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;

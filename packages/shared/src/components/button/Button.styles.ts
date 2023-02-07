import { VariantProps, cva } from "cva";

export const buttonStyles = cva(
  "group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-primary-700 border border-transparent hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 disabled:hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:disabled:hover:bg-primary-600",
        secondary: "text-white bg-secondary-800 hover:bg-secondary-900",
        tertiary: "bg-tertiary-800 hover:bg-tertiary-900",
        text: "text-gray-900 bg-white  focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
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
    },
    compoundVariants: [
      {
        variant: "primary",
        pill: true,
        class: "hidden",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      pill: false,
    },
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;

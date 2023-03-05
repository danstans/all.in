import { VariantProps, cva } from "cva";

export const buttonGroupStyles = cva("flex", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

export type ButtonGroupStyleProps = VariantProps<typeof buttonGroupStyles>;

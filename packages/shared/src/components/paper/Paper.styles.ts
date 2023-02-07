import { VariantProps, cva } from "cva";

export const paperStyles = cva(
  "",
  {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  },
);

export type PaperStyleProps = VariantProps<typeof paperStyles>;

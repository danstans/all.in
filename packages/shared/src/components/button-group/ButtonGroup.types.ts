import { PropsWithChildren } from "react";
import { ButtonProps } from "../button/Button.types";
import type { ButtonGroupStyleProps } from "./ButtonGroup.styles";

export type ButtonGroupProps = ButtonGroupStyleProps &
  PropsWithChildren<{
    variant: ButtonProps["variant"];
  }>;

import { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import type { TextFieldStyleProps } from "./TextField.styles";

export type TextFieldProps = TextFieldStyleProps &
  PropsWithChildren<{
    name: string;
    type?: HTMLInputTypeAttribute;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  }>;

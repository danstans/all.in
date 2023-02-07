import { ForwardedRef, PropsWithChildren } from "react";
import type { ButtonStyleProps } from "./Button.styles";

export type ButtonProps = ButtonStyleProps &
  PropsWithChildren<{
    /** A React ref to attach to the rendered Button */
    ref?: ForwardedRef<HTMLButtonElement>;
    /** An HTML ID attribute that will be attached to the the rendered component.
     * Useful for targeting it from tests
     * */
    id?: string;
    /** Controls the type of button that is rendered */
    type?: "button" | "reset" | "submit";
    /** Controls if this button should steal focus when mounted */
    autoFocus?: boolean;
    // A callback called when the button is clicked
    onClick: () => void;
    /** Controls if the button shows Loader */
    isLoading?: boolean;
    /** Controls if this button is disabled */
    isDisabled?: boolean;
  }>;

import { RefObject, forwardRef, useRef } from "react";
import { buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import cn from "classnames";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      id,
      autoFocus,
      type,
      children,
      onClick,
      isDisabled = false,
      isLoading,
      variant,
      fullWidth,
      pill,
    } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const buttonRef = forwardedRef || ref;

    const isLoadingOrDisabled = isDisabled || isLoading;

    const { buttonProps } = useButton(
      {
        id,
        autoFocus,
        type,
      },
      buttonRef as RefObject<HTMLButtonElement>,
    );

    const { hoverProps } = useHover({ isDisabled: isLoadingOrDisabled });

    return (
      <button
        ref={buttonRef}
        {...mergeProps(hoverProps, buttonProps)}
        type="button"
        className={cn(buttonStyles({ variant, fullWidth, pill }))}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

export default Button;

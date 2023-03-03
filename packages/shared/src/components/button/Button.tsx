import { RefObject, forwardRef, useRef } from "react";
import { ButtonStyleProps, buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import cn from "classnames";

const Button = forwardRef((props: ButtonProps, forwardedRef) => {
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
      children,
      onClick,
      isDisabled = false,
      isLoading,
      variant,
      size,
      fullWidth,
      pill,
      invert,
    } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const buttonRef = forwardedRef || ref;

  const { hoverProps } = useHover({ isDisabled: isLoadingOrDisabled });

    const { buttonProps } = useButton(
      {
        id,
        autoFocus,
        type,
      },
      buttonRef as RefObject<HTMLButtonElement>,
    );

    const { hoverProps } = useHover({ isDisabled: isLoadingOrDisabled });
    const [color, style] = variant.split("/") as [
      ButtonStyleProps["color"],
      ButtonStyleProps["style"],
    ];

    return (
      <button
        ref={buttonRef}
        {...mergeProps(hoverProps, buttonProps)}
        type="button"
        className={cn(
          buttonStyles({ style, color, size, fullWidth, pill, invert }),
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

export default Button;

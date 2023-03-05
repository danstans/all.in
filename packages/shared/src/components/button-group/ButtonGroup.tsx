import {
  Children,
  ReactElement,
  ReactFragment,
  cloneElement,
  isValidElement,
} from "react";
import Button from "../button/Button";
import { ButtonProps } from "../button/Button.types";
import { buttonGroupStyles } from "./ButtonGroup.styles";
import { ButtonGroupProps } from "./ButtonGroup.types";
import cn from "classnames";

const ButtonGroup = (props: ButtonGroupProps): JSX.Element => {
  const { children, variant } = props;

  const arrayChildren = Children.toArray(children);
  // const LeftButton = buttons.shift();
  // const RightButton = buttons.pop();
  return (
    <div className={cn(buttonGroupStyles(props))}>
      {Children.map(arrayChildren, (child, index) => {
        if (isValidElement(child)) {
          const isLast = index === arrayChildren.length - 1;

          if (index === 0 || isLast)
            return cloneElement(child as React.ReactElement<ButtonProps>, {
              ...(child.props as ButtonProps),
              position: isLast ? "right" : "left",
              variant,
            });

          return cloneElement(child as React.ReactElement<ButtonProps>, {
            ...(child.props as ButtonProps),
            position: "center",
            variant,
          });
        }
      })}
    </div>
  );
};

export default ButtonGroup;

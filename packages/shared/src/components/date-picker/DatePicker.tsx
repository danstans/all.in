import { datePickerStyles } from "./DatePicker.styles";
import { DatePickerProps } from "./DatePicker.types";
import cn from "classnames";

const DatePicker = (props: DatePickerProps): JSX.Element => {
  return <div className={cn(datePickerStyles(props))}>Hello world</div>;
};

export default DatePicker;

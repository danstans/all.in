import { paperStyles } from "./Paper.styles";
import { PaperProps } from "./Paper.types";
import cn from "classnames";

const Paper = (props: PaperProps): JSX.Element => {
  return <div className={cn(paperStyles(props))}>Hello world</div>;
};

export default Paper;

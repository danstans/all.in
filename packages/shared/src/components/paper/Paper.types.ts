import { PropsWithChildren } from "react";
import type { PaperStyleProps } from "./Paper.styles";

export type PaperProps = PaperStyleProps & PropsWithChildren<{}>;

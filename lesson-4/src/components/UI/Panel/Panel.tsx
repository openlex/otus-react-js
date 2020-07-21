import React from "react";
import cn from "classnames";
import * as s from "./Panel.scss";

interface IPanelProps {
  className?: string;
  children: React.ReactNode;
}

export const Panel: React.FC<IPanelProps> = (props: IPanelProps) => {
  return <div className={cn(s.block, props.className)}>{props.children}</div>;
};

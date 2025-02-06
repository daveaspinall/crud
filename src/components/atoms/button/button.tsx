import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import * as styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({ className, children, onClick }: ButtonProps) => (
  <button className={classNames(className, styles.button)} onClick={onClick}>
    {children}
  </button>
);

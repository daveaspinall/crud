import { ReactNode } from "react";
import classNames from "classnames";

import * as styles from "./error.module.css";

interface ErrorProps {
  className?: string;
  children?: ReactNode;
}

export const Error = ({ className, children }: ErrorProps) => (
  <p className={classNames(className, styles.error)}>{children}</p>
);

import React from "react";
import styles from "./not-active-label.module.css";
import { requestFormReset } from "react-dom";

export interface NotActiveLabelProp {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProp) {
  return <span className={styles.label}>{children}</span>;
}

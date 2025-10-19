import React from "react";
import styles from "./active-label.module.css";
import { log } from "console";

export interface ActiveLabelProp {
  children: React.ReactNode;
}
console.log("====================================");
console.log(styles);
console.log("====================================");
export default function ActiveLabel({ children }: ActiveLabelProp) {
  return <span className={styles.label}>{children}</span>;
}

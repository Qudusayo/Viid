import React from "react";
import styles from "./ShareIcon.module.scss";

export default function ShareIcon({ name, link, children }) {
  return (
    <div className={styles.ShareIcon}>
      <span>{children}</span>
      <span>{name}</span>
    </div>
  );
}

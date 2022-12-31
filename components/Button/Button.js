import styles from "./Button.module.scss";
import { FiUploadCloud } from "react-icons/fi";

export default function Button({ title, smaller }) {
  return (
    <button
      className={[styles.Button, smaller && styles.ButtonSmaller].join(" ")}
    >
      <span className={styles.ButtonTitle}>{title}</span>
      <span className={styles.ButtonIcon}>
        <FiUploadCloud stroke="#0098fd" size={smaller ? 20 : 25} />
      </span>
    </button>
  );
}

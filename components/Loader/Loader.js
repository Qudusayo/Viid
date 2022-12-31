import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div>
      <div className={styles.Loader}>
        <div className={styles.LoaderInner}>
          <div className={styles.Spinner}></div>
          <div className={[styles.Blue, styles.Static].join(" ")}></div>
          <div className={[styles.White, styles.Active].join(" ")}></div>
        </div>
      </div>
    </div>
  );
}

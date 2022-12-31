import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Link href={"/"}>
        <h2>ViiD</h2>
      </Link>
    </nav>
  );
}

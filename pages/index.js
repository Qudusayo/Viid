import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./../styles/Home.module.scss";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <>
      <header className={styles.Header}>
        <h2>Video Upload</h2>
        <p>Upload and play your videos straight from your browser</p>
        <Button title={"Get Started"} smaller={true} />
      </header>
    </>
  );
}

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function LayoutLink({titulo,parrafo,ruta}) {
  return (
    <Link href={ruta} className={styles.card}>
        <h2>{titulo} &rarr;</h2>
        <p>{parrafo}</p>
    </Link>
  )
}

import styles from '../styles/Navbar.module.css'
import ActiveLink from './ActiveLink'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ActiveLink text={"Home"} href="/" />
        <ActiveLink text={"About"} href="/about" />
        <ActiveLink text={"Contact"} href="/contact" />
    </nav>
  )
}

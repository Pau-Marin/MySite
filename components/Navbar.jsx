import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.navHeader}>
      <nav className={styles.navBar}>
        <h1 className={styles.logo}>Pau Marin Jubete</h1>
        <ul className={styles.navBarList}>
          <li className={styles.navBarItem}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.navBarItem}>
            <Link href={"/about"}>About Me</Link>
          </li>
          <li className={styles.navBarItem}>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li className={styles.navBarItem}>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

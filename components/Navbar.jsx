import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li className={styles.navBar}>
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

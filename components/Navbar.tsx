import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>My App</div>

      <ul style={styles.navLinks}>
        <li>
          <Link href="/card-test" style={styles.link}>
            Card Test
          </Link>
        </li>

        <li>
          <Link href="/vocabulary" style={styles.link}>
            Vocabulary
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 25px",
    background: "#222",
    color: "white",
  },
  logo: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
};
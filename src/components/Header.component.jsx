import styles from "./header.module.scss";
import Button from "../button/Button.component";

const Header = () => {
    return (
        <nav className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.ellipse}>
            <span className={styles.pageLogo}>G</span>
          </div>
          <p className={styles.pageTitle}>Global</p>
        </div>
        <div>
          <ul className={styles.navbar}>
            <li className={styles.item}>Mobile top up</li>
            <li className={styles.item}>About</li>
            <li className={styles.item}>Rote</li>
            <li className={styles.item}>Help</li>
          </ul>
        </div>

        <div>
          <Button>Sign up</Button>
        </div>
      </nav>

    )
}
export default Header;
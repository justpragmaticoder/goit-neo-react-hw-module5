import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navBlock}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeNavItem}` : styles.navLink
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeNavItem}` : styles.navLink
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

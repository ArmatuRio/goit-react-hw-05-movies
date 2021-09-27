import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

import { Logo } from '../Logo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Logo />
      </div>
    </header>
  );
}

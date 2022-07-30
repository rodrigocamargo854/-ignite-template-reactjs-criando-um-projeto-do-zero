import Link from 'next/link';
import { Logo } from '../Logo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a href="">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
